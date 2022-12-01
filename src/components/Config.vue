<template>
	<b-container class="text-left">
		<b-row>
			<b-col sm="8">
				<b-card class="text-left" header="测试选项">
					<b-form-group>
						<b-form-checkbox v-for="(item,index) in configItem" :key="index" v-model="factory[item.name].activated" value="1"
						 unchecked-value="0">
							{{item.value}}
							<br>
							<b-row v-if="factory[item.name].activated==='1'" v-for="(param,key,it) in factory[item.name]" :key="it">
								<b-col v-if="key!=='activated'" sm="3">
									<label>{{key}}</label>
								</b-col>
								<b-col v-if="key!=='activated'" sm="9">
									<b-form-input :type="text" v-model="factory[item.name][key]">
									</b-form-input>
								</b-col>
							</b-row>
						</b-form-checkbox>
					</b-form-group>
					<b-button class="m-1" variant="primary" @click="input">导入</b-button>
					<b-button class="m-1" type="submit" @click="download" variant="primary">下载</b-button>
					<b-button class="m-1" type="reset" @click="onReset" variant="danger">重置</b-button>
				</b-card>
			</b-col>
			<b-col sm="4">
				<b-card class="text-left" header="配置结果">
					<pre class="m-0">{{ output }}</pre>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				configItem: [{
						name: 'LAN',
						value: '有线网口'
					},
					{
						name: 'WIFI',
						value: '2.4G信号'
					},
					{
						name: 'WIFI2',
						value: '5G信号'
					},
					{
						name: 'BT',
						value: '蓝牙'
					},
					{
						name: 'INTERNET',
						value: '联网激活'
					},
					{
						name: 'SD',
						value: 'SD卡'
					},
					{
						name: 'USB',
						value: 'U盘'
					},
					{
						name: 'HDMI',
						value: 'HDMI接口'
					},
					{
						name: 'CHNL',
						value: '左右声道'
					},
					{
						name: 'LED',
						value: 'LED灯'
					},
					{
						name: 'REST',
						value: '重置'
					},
					{
						name: 'CVBS',
						value: 'CVBS接口'
					},
					{
						name: 'WIFISP',
						value: 'Wifi带宽'
					},
					{
						name: 'SSD',
						value: '节点存在'
					},
				],
				change: {

				},
				factoryStr: `[LAN]
activated=1

[WIFI]
activated=1
wifi_ap=qmorn_2.4G
password=qmorn2018
connect=1
db_start=-0
db_end=-120

[WIFI2]
activated=1
wifi_ap=qmorn_5G
password=qmorn2018
connect=1
db_start=-0
db_end=-120

[BT]
activated=1
bt_name=

[INTERNET]
activated=1

[SD]
activated=1

[USB]
activated=1
connect=2

[HDMI]
activated=0

[CHNL]
activated=0

[LED]
activated=0

[REST]
activated=0

[CVBS]
activated=0

[WIFISP]
activated=0
cmd_iperf=iperf -c 192.168.123.1 -i 1 -t 5 -w 1M
band_min=15

[SSD]
path=/dev/block/sda|/dev/block/sdb`,
				factory: {}
			}
		},
		created() {
			this.creatini()
		},
		mounted() {},
		methods: {
			download() {
				var data = this.entry()
				var a = document.createElement("a");
				document.body.appendChild(a);
				a.style = "display: none";
				var blob = new Blob([data])
				var url = window.URL.createObjectURL(blob);
				a.href = url;
				a.download = "Factory_Test.bin";
				a.click();
				window.URL.revokeObjectURL(url);
			},
			input() {

			},
			onReset() {
				this.creatini()
			},
			creatini() {
				var ini = require('ini')
				this.factory = ini.decode(this.factoryStr)
			},
			entry() {
				var out = this.output.replace(/(\n)/g,'\r\n');
				var out_byte = this.stringToBytes(out)
				var S = new Uint8Array(256);
				var K = new Uint8Array(256);
				var temp;
				var i, j, t, x
				var key = [
					124,
					78,
					3,
					4,
					85,
					5,
					9,
					7,
					45,
					44,
					123,
					56,
					23,
					13,
					23,
					17
				];

				j = 0;
				for (i = 0; i < 256; i++) {
					S[i] = i;
					j &= 0x0f;
					K[i] = key[j];
					j++;
				}

				j = 0;
				for (i = 0; i < 256; i++) {
					j = ((j + S[i] + K[i]) % 256) & 0x0FF;
					temp = S[i];
					S[i] = S[j];
					S[j] = temp;
				}

				i = j = 0;
				for (x = 0; x < out_byte.length; x++) {
					i = ((i + 1) % 256) & 0x0FF;
					j = ((j + S[i]) % 256) & 0x0FF;
					temp = S[i];
					S[i] = S[j];
					S[j] = temp;
					t = ((S[i] + (S[j] % 256)) % 256) & 0x0FF;
					out_byte[x] = (out_byte[x] ^ S[t]) & 0x0FF;
				}
				
				var head = this.stringToBytes('SIGN')
				var len = this.intToByte4(out_byte.length)
				var resu = head.concat(len).concat(out_byte).concat([1,1,1,1])
				
				var resu_arry = new Uint8Array(resu.length)
				for (var u = 0; u < resu.length; u++) {
					resu_arry[u] = resu[u]
				}
				return resu_arry
			},
			stringToBytes(str) {
				var ch, st, re = [];
				console.log(str.length)
				for (var i = 0; i < str.length; i++) {
					ch = str.charCodeAt(i); // get char  
					st = []; // set up "stack"  
					do {
						st.push(ch & 0xFF); // push byte to stack  
						ch = ch >> 8; // shift value down by 1 byte  
					}
					while (ch);
					// add stack contents to result  
					// done because chars have "wrong" endianness  
					re = re.concat(st.reverse());
				}
				// return an array of bytes  
				return re;
			},
			Bytes2Str(arr) {
				var str = "";
				for (var i = 0; i < arr.length; i++) {
					var tmp = arr[i].toString(16);
					if (tmp.length == 1) {
						tmp = "0" + tmp;
					}
					str += tmp;
				}
				return str;
			},
			intToByte4(i) {
				var targets = [];
				targets[0] = (i & 0xFF);
				targets[1] = (i >> 8 & 0xFF);
				targets[2] = (i >> 16 & 0xFF);
				targets[3] = (i >> 24 & 0xFF);
				return targets;
			},
		},
		computed: {
			output: function() {
				var ini = require('ini')
				return ini.encode(this.factory).trim()
			}
		}
	}
</script>

<style>
</style>
