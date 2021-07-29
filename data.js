// $(document).ready(function(){
	var HOST = "https://script.google.com/macros/s/AKfycbzgP4okoxtSvjv3x7kEfqx2vIFj-ud24I42NR2s2cZ70D3jD_BmBWAPb-KveE6dLY3g6Q/exec";
	var searchParams = new URLSearchParams(window.location.search);
	var DB = {
		YEAR : new Date().getFullYear(),
		// Năm làm việc
		SHEET : [], 
		// Dữ liệu Sheet
		KHOI_THI : {
			//Khối A
			"A00" : ["TOAN","LI","HOA"],
			"A01" : ["TOAN","LI","NN"],
			"A02" : ["TOAN","LI","SINH"],
			"A03" : ["TOAN","LI","SU"],
			"A04" : ["TOAN","LI","DIA"],
			"A05" : ["TOAN","HOA","SU"],
			"A06" : ["TOAN","HOA","DIA"],
			"A07" : ["TOAN","SU","DIA"],
			"A08" : ["TOAN","SU","GDCD"],
			"A09" : ["TOAN","DIA","GDCD"],
			"A10" : ["TOAN","DIA","GDCD"],
			"A11" : ["TOAN","HOA","GDCD"],
			"A12" : ["TOAN","KHTN","KHXH"],
			"A14" : ["TOAN","KHTN","DIA"],
			"A15" : ["TOAN","KHTN","GDCD"],
			"A16" : ["TOAN","KHTN","VAN"],
			"A17" : ["TOAN","LI","KHXH"],
			"A18" : ["TOAN","HOA","KHXH"],
			//Khối B
			"B00" : ["TOAN","HOA","SINH"],
			"B01" : ["TOAN","SINH","SU"],
			"B02" : ["TOAN","SINH","DIA"],
			"B03" : ["TOAN","SINH","VAN"],
			"B04" : ["TOAN","SINH","GDCD"],
			"B05" : ["TOAN","SINH","KHXH"],
			"B08" : ["TOAN","SINH","NN"],
			//Khối C
			"C00" : ["VAN","SU","DIA"],
			"C01" : ["VAN","TOAN","HOA"],
			"C02" : ["VAN","TOAN","LI"],
			"C03" : ["VAN","TOAN","SU"],
			"C04" : ["VAN","TOAN","DIA"],
			"C05" : ["VAN","LI","HOA"],
			"C06" : ["VAN","LI","SINH"],
			"C07" : ["VAN","LI","SU"],
			"C08" : ["VAN","HOA","SINH"],
			"C09" : ["VAN","LI","DIA"],
			"C10" : ["VAN","HOA","SU"],
			"C12" : ["VAN","SINH","SU"],
			"C13" : ["VAN","SINH","DIA"],
			"C14" : ["VAN","TOAN","GDCD"],
			"C15" : ["VAN","TOAN","KHXH"],
			"C16" : ["VAN","LI","GDCD"],
			"C17" : ["VAN","HOA","GDCD"],
			"C19" : ["VAN","SU","GDCD"],
			"C20" : ["VAN","DIA","GDCD"],
			// Khối D
			"D01":["VAN","TOAN","NN"],
			"D02":["VAN","TOAN","NN"],
			"D03":["VAN","TOAN","NN"],
			"D04":["VAN","TOAN","NN"],
			"D05":["VAN","TOAN","NN"],
			"D06":["VAN","TOAN","NN"],
			"D07":["TOAN","HOA","NN"],
			"D08":["TOAN","SINH","NN"],
			"D09":["TOAN","SU","NN"],
			"D10":["TOAN","DIA","NN"],
			"D11":["VAN","LI","NN"],
			"D12":["VAN","HOA","NN"],
			"D13":["VAN","SINH","NN"],
			"D14":["VAN","SU","NN"],
			"D15":["VAN","DIA","NN"],
			"D16":["TOAN","DIA","NN"],
			"D17":["TOAN","DIA","NN"],
			"D18":["TOAN","DIA","NN"],
			"D19":["TOAN","DIA","NN"],
			"D20":["TOAN","DIA","NN"],
			"D21":["TOAN","HOA","NN"],
			"D22":["TOAN","HOA","NN"],
			"D23":["TOAN","HOA","NN"],
			"D24":["TOAN","HOA","NN"],
			"D25":["TOAN","HOA","NN"],
			"D26":["TOAN","LI","NN"],
			"D27":["TOAN","LI","NN"],
			"D28":["TOAN","LI","NN"],
			"D29":["TOAN","LI","NN"],
			"D30":["TOAN","LI","NN"],
			"D31":["TOAN","SINH","NN"],
			"D32":["TOAN","SINH","NN"],
			"D33":["TOAN","SINH","NN"],
			"D34":["TOAN","SINH","NN"],
			"D35":["TOAN","SINH","NN"],
			"D41":["VAN","DIA","NN"],
			"D42":["VAN","DIA","NN"],
			"D43":["VAN","DIA","NN"],
			"D44":["VAN","DIA","NN"],
			"D45":["VAN","DIA","NN"],
			"D52":["VAN","LI","NN"],
			"D54":["VAN","LI","NN"],
			"D55":["VAN","LI","NN"],
			"D61":["VAN","SU","NN"],
			"D62":["VAN","SU","NN"],
			"D63":["VAN","SU","NN"],
			"D64":["VAN","SU","NN"],
			"D65":["VAN","SU","NN"],
			"D66":["VAN","GDCD","NN"],
			"D68":["VAN","GDCD","NN"],
			"D69":["VAN","GDCD","NN"],
			"D70":["VAN","GDCD","NN"],
			"D72":["VAN","KHTN","NN"],
			"D73":["VAN","KHTN","NN"],
			"D74":["VAN","KHTN","NN"],
			"D75":["VAN","KHTN","NN"],
			"D76":["VAN","KHTN","NN"],
			"D77":["VAN","KHTN","NN"],
			"D78":["VAN","KHXH","NN"],
			"D79":["VAN","KHXH","NN"],
			"D80":["VAN","KHXH","NN"],
			"D81":["VAN","KHXH","NN"],
			"D82":["VAN","KHXH","NN"],
			"D83":["VAN","KHXH","NN"],
			"D84":["TOAN","GDCD","NN"],
			"D85":["TOAN","GDCD","NN"],
			"D86":["TOAN","GDCD","NN"],
			"D87":["TOAN","GDCD","NN"],
			"D88":["TOAN","GDCD","NN"],
			"D90":["TOAN","KHTN","NN"],
			"D91":["TOAN","KHTN","NN"],
			"D92":["TOAN","KHTN","NN"],
			"D93":["TOAN","KHTN","NN"],
			"D94":["TOAN","KHTN","NN"],
			"D95":["TOAN","KHTN","NN"],
			"D96":["TOAN","KHXH","NN"],
			"D97":["TOAN","KHXH","NN"],
			"D98":["TOAN","KHXH","NN"],
			"D99":["TOAN","KHXH","NN"]
		},
		// Khối Thi
		KEY_WORD : {
			CN : {
				title : 'Cả nước',
				data : ["5","6","7","8","9","10","11","13","14","62", "1","3","12","15","16","17","18","19","21","22","23","24","25","26","27", "28", "29", "30", "31","32","33","4","34","35","37","39","41","45","47","36","38","40","42","63","2","43","44","46","48","52","49","50","51","53","54","55","56","57","58","59","60","61","64"]
			},
			CT :{
				title : 'Cụm thi',
				data : ["1"]
			}, 
			DB1 :{
				title : 'Địa bàn 1',
				data : ["5","6","7","8","9","10","11","13","14","62"]
			}, 
			DB2 : {
				title :'Địa bàn 2',
				data : ["1","3","12","15","16","17","18","19","21","22","23","24","25","26","27"]
			},
			DB3 : {
				title : 'Địa bàn 3',
				data : ["28","29","30","31","32","33"]
			},
			DB4 : {
				title : 'Địa bàn 4',
				data : ["4","34","35","37","39","41","45","47"]
			},
			DB5 : {
				title :'Địa bàn 5',
				data : ["36","38","40","42","63"]
			},
			DB6 : {
				title : 'Địa bàn 6',
				data : ["2","43","44","46","48","52"]
			},
			DB7 : {
				title :'Địa bàn 7',	 
				data : ["49","50","51","53","54","55","56","57","58","59","60","61","64"]
			},	
			PB :{
				title : "Phía Bắc",
				data : ["5","6","7","8","9","10","11","13","14","62", "1","3","12","15","16","17","18","19","21","22","23","24","25","26","27", "28", "29", "30", "31"]
			}, 	
			PN : 		{
				title : 'Phía Nam',
				data : ["32","33","4","34","35","37","39","41","45","47","36","38","40","42","63","2","43","44","46","48","52","49","50","51","53","54","55","56","57","58","59","60","61","64"]
			},
			MB : {
				title : "Miền Bắc",
				data : ["5","6","7","8","9","10","11","13","14","62", "1","3","12","15","16","17","18","19","21","22","23","24","25","26","27"]
			},
			MT : {
				title : "Miền Trung",
				data : ["28", "29", "30", "31", "32","33","4","34","35","37","39","41","36","38","40","42","45","47","63"]
			},
			MN : {
				title : "Miền Nam",
				data : ["2","43","44","46","48","52","49","50","51","53","54","55","56","57","58","59","60","61","64"]
			}
		},
		// Hành động
		TITLE_MONTHI : {
			"TOAN" : "Toán",
			"VAN" : "Ngữ văn",
			"NN" : "Ngoại ngữ",
			"LI" : "Vật lí",
			"HOA" : "Hoá học",
			"SINH" : "Sinh học",
			"SU" : "Lịch sử",
			"DIA" : "Địa lí",
			"GDCD" : "GDCD",
			"KHTN" : "KHTN",
			"KHXH" : "KHXH",
		},
		// Tiêu đề môn thi
		TABLERESULT : null, 
		//Bảng kết quả
		PROVINE : {},
		// Dữ liệu điểm
	}
	
	
	// Các biến
	var khoi_thi = $('[name="khoi_thi"]'), 
	table_DB = $('#listData tbody'),
	cum_thi = $('[name="cum_thi"]'),
	action = $('[name="action"]');
	loading = $('.loading');
	
	// Khởi tạo dữ liệu
	async function buildTable(){
		// Khối thi
		var khoiThi = '<option value="0" selected>Vui lòng chọn khối thi</option><option value="0">Chọn tất cả</option>';
		for(var khoi  in DB.KHOI_THI){
			khoiThi += `<option value="${khoi}">Khối ${khoi}</option>`;
		}		
		khoi_thi.html(khoiThi);		
		khoi_thi.select2();
		
		// Cụm thi + Bảng dữ liệu
		var cumThi = '<option value="0" selected>Chọn tất cả các cụm thi</option>', tableDB = '';
		DB.SHEET.forEach((el,  i) => {
			tableDB += `<tr data-id="${el.code}"><td>${el.code}</td><td> ${el.name}</td><td></td><td></td></tr>`;	
			cumThi += `<option value="${el.code}">${el.code} - ${el.name}</option>`;
		});
		table_DB.html(tableDB);
		cum_thi.html(cumThi);
		cum_thi.select2();
		
		// Hành động
 		var actionText = '<option value="0" selected>Vui lòng chọn hành động</option>';
		for(var keys  in DB.KEY_WORD){
			actionText += `<option value="${keys}">${DB.KEY_WORD[keys].title.toUpperCase()}</option>`;
		}
		action.html(actionText);
		
		// Thiết lập dữ liệu
		DB.SHEET.forEach(async (el,  i) => {			
			cnt = await localforage.getItem(`${DB.YEAR}_` + el.code.toString());			
			DB.PROVINE[el.code.toString()] = cnt;
			
			table_DB.find('tr').eq(i).find('td').eq(2).text(Object.keys(cnt || {}).length);		

			if (Object.keys(DB.PROVINE).length === DB.SHEET.length) { // Load hoàn tất
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Hoàn tất load dữ liệu',
					showConfirmButton: true,					
				});
				loading.addClass('hidden');
			}
		})
	}
	
	// Sửa lỗi Môn ngoại ngữ toàn hệ thống
	function fixData(){
		for(var code in DB.PROVINE){
			for(var sbd in DB.PROVINE[code]){
				var marks;
				if (DB.PROVINE[code][sbd].TYPE){
					marks = DB.PROVINE[code][sbd].TYPE;
					if (marks.indexOf('N1') > -1) {
						DB.PROVINE[code][sbd].type = 1;
					} else if (marks.indexOf('N2') > -1) {
						DB.PROVINE[code][sbd].type = 6;
					} else if (marks.indexOf('N3') > -1) {
						DB.PROVINE[code][sbd].type = 5;
					} else if (marks.indexOf('N4') > -1) {
						DB.PROVINE[code][sbd].type = 2
					} else if (marks.indexOf('N5') > -1) {
						DB.PROVINE[code][sbd].type = 4;
					} else if (marks.indexOf('N6') > -1) {
						DB.PROVINE[code][sbd].type = 3;
					} else {
						DB.PROVINE[code][sbd].type = 0;
					}					
					delete DB.PROVINE[code][sbd]['TYPE'];
				}
			}
		}
		
		var sum = 0;
		for(var code in DB.PROVINE){
			localforage.setItem(`${DB.YEAR}_${code}`, DB.PROVINE[code]).then((value) => {
				sum++;
				console.log("loading mã tỉnh " + code) ;
				if (sum == Object.keys(DB.PROVINE).length) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'ĐÃ CẬP NHẬT XONG',
						showConfirmButton: true,
						// timer: 1500
					})					
					loading.addClass('hidden');
				}				
			})
		}
	}
	
	$('body').delegate('.fixData', 'click', function(event) {
		loading.removeClass('hidden');
		fixData();
	});
	
	// Lấy dữ liệu từ hệ thống
	function fetchData(postion){
		if (postion >= DB.SHEET.length){
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Hoàn tất load dữ liệu',
				showConfirmButton: true,
				// timer: 1500
			})
			loading.addClass('hidden');
			// $('.notica').text('Hoàn tất load dữ liệu');
			return;
		}
		
		$.ajax({
			url : `https://spreadsheets.google.com/feeds/cells/${DB.SHEET[postion].id}/1/public/values`,
			type: "GET",
			dataType: "jsonp",
			data : {
				alt : 'json-in-script',
				q : '-"rank"'
			},
			cache : true,
			beforeSend : () =>{
				table_DB.find('tr').eq(postion).find('td').eq(3).text("Fetching...");
				$('.notica').text('Fetching ' + (postion + 1));
			},
			success : (e) => {
				try {
					var tmp, data = {};
					(e.feed.entry || []).forEach((el) => {
						tmp = JSON.parse(el.content.$t);
						if (!data.hasOwnProperty(tmp.SBD.toString())) {
							data[tmp.SBD.toString()] = tmp;
						}						
					});
					table_DB.find('tr').eq(postion).find('td').eq(2).text(Object.keys(data).length);
					localforage.setItem(`${DB.YEAR}_` +DB.SHEET[postion].code.toString(), data);
					table_DB.find('tr').eq(postion).find('td').eq(3).text("Fetch xong");
							
				} catch (e) {
					console.log(e);
				}
			}
		}).always(() => {
			postion++;
			fetchData(postion);
		});
	}
	
	$('body').delegate('.fetchData', 'click', function(event) {
		loading.removeClass('hidden');
		fetchData(0)
	});
	
	//Kiếm tra môn ngoại ngữ
	function checkKhoiThi(khoi, type){
		if ("A01,B08,D01,D07,D08,D09,D10,D11,D12,D13,D14,D15,D66,D72,D78,D84,D90,D96,H04,H06,M10,M11,M15,M19,M23,N08,N09,R03,R05,V03".indexOf(khoi) > -1 && type !== 1) { // Tiếng Anh
			return false;
		} 
		if ("D04,D20,D25,D30,D35,D45,D55,D65,D77,D83,D95,V11".indexOf(khoi) > -1 && type !== 2) { // Trung
			return false;
		} 
		if ("D06,D18,D23,D28,D33,D43,D63,D69,D75,D81,D88,D94,V09".indexOf(khoi) > -1 && type !== 3) { // Nhật
			return false;
		} 
		if ("D05,D16,D21,D26,D31,D41,D61,D73,D79,D85,D92,D98,V06,V07".indexOf(khoi) > -1 && type !== 4) { // Đức
			return false;
		} 
		if ("D03,D19,D24,D29,D34,D44,D54,D64,D70,D76,D82,D87,D91,D97,V10".indexOf(khoi) > -1 && type !== 5) { // Pháp
			return false;
		} 
		if ("D02,D17,D22,D27,D32,D42,D52,D62,D68,D74,D80,D86,D93,D99,V08".indexOf(khoi) > -1 && type !== 6) { // Nga
			return false;
		} 
		return true;
	}

	
	
	
	function renderRanking(data, index, titleChart = 'Phổ điểm'){
		var options = {
			series: data,
			// series: [{
				// name: 'series1',
				// data: [31, 40, 28, 51, 42, 109, 100]
			// }],
			// chart: {
				// height: 640,
				// type: 'area'
			// },
			chart: {
				height: 640,
				id: index,
				type: 'area',
				zoom: {
					enabled: true
				}
			},
			dataLabels: {
				enabled: true
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				categories: [
					'<=0',
					'<=1',
					'<=2',
					'<=3',
					'<=4',
					'<=5',
					'<=6',
					'<=7',
					'<=8',
					'<=9',
					'<=10',
					'<=11',
					'<=12',
					'<=13',
					'<=14',
					'<=15',
					'<=16',
					'<=17',
					'<=18',
					'<=19',
					'<=20',
					'<=21',
					'<=22',
					'<=23',
					'<=24',
					'<=25',
					'<=26',
					'<=27',
					'<=28',
					'<=29',
					'<=30',
					// '<=31',
					// '<=32',
					// '<=33',
					// '<=44',
					// '<=35',
					// '<=36',
					// '<=37',
					// '<=38',
					// '<=39',
					// '<=40'
				]
			},
			yaxis: {
				title: {
				text: 'Số thí sinh',
					style : {
						fontFamily : "Noto Sans",
						fontSize:  '16px',
						fontWeight:  'bold',
						color:  '#007bff'
					}
				}
			},
			title : {
				text : titleChart,
				align: 'center',
				style : {
					fontFamily : "Noto Sans",
					fontSize:  '28px',
					fontWeight:  'bold',
				  color:  '#007bff'
				}
			},
			 plotOptions: {
			  area: {
				borderRadius: 10,
				dataLabels: {
					position: 'top', 
				},
			  }
			},
			// tooltip: {
				// x: {
					// format: 'dd/MM/yy HH:mm'
				// },
			// },
		};

		if ($('#'+ index).html() !== '') { // Cập nhật
			return ApexCharts.exec(index, 'updateOptions', options, true);
		} else {
			var chart = new ApexCharts(document.querySelector('#'+ index), options);
			return chart.render();
		}	
		// var chart = new ApexCharts(document.querySelector("#chart-phodiem"), options);
		// chart.render();
	}


	
	khoi_thi.change(function(event) {
		if (khoi_thi.val()[0] == "0"){
			var all = [];
			for(var it in  DB.KHOI_THI){
				all.push(it);
			}
			khoi_thi.val(all).trigger('change');
		}
	});
	
	action.change(function(event) {
		cum_thi.val(DB.KEY_WORD[$(this).val()].data).trigger('change');
	});
	
/*
	$('body').delegate('.viewPhodiem', 'click', function(event) {
			$('.notica').text('Đang phân tích dữ liệu');
		try {
			if (Object.keys(PROVINE).length !== sheetData.length){
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: 'Chưa cập nhật dữ liệu xong',
					showConfirmButton: true,
					// timer: 1500
				})
				$('.notica').text('');
				// $('.notica').text('Hoàn tất load dữ liệu');
				return;
			}
			var cum_thi = $('[name="cum_thi"]').val();
			var khoi_thi = $('[name="khoi_thi"]').val();
			// var title_chart = $('[name="title_chart"').val();
			var action = $('[name="action"]').val();
			
			if (khoi_thi[0] == "0") {
				
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Vui lòng chọn khối thi',
					footer: '<a href="">Why do I have this issue?</a>'
				})
				$('.notica').text('');
				// $('.notica').text('Hoàn tất load dữ liệu');
				return;
			}
			if (action == "0") {
				
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Vui lòng chọn hành động',
					footer: '<a href="">Why do I have this issue?</a>'
				})
				$('.notica').text('');
				return;
			} 
			
			
			var title_chart = KEY_WORD[action].title.toUpperCase();
			
			var data = {};
			
			if (action === "CUM_THI") {
				if (cum_thi.length > 1 || cum_thi[0] == "0") {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Vui lòng chọn lại cụm thi',
						footer: '<a href="">Why do I have this issue?</a>'
					})
					return;
				}
				data = Object.assign({}, PROVINE[cum_thi[0]]);
			} else {
				KEY_WORD[action].data.forEach((code) => {
					if (parseInt(code)){
						data =  Object.assign({}, data, PROVINE[code]);
					}
				})
			}
			
			
			
			if (khoi_thi.length == 1) {
				khoi_thi = khoi_thi[0];
				var result = rankingData(data, khoi_thi);
				
					// Làm phổ điểm
				var chartData = [];
				for(var marks in result.ranking){
					
					if (!chartData[Math.ceil(parseFloat(marks))]) chartData[Math.ceil(parseFloat(marks))] = 0;
					chartData[Math.ceil(parseFloat(marks))] += result.ranking[marks].total.length
				
				}
				for(var i = 0; i <= 30; i++){
				// for(var i = 0; i <= 40; i++){
					if (!chartData[i]) chartData[i] = 0;
				}
				renderRanking([{data : chartData}], 'chart-phodiem', `PHỔ ĐIỂM ${khoi_thi} ${title_chart} THI TỐT NGHIỆP 2021 ĐỢT 1 - www.taodethi.xyz`);
				
				// console.log(result);
				//// Đẩy dữ liệu vô toàn cục
				for(var sbd in result.result){
					if (result.marks[sbd]) {
						var ma_tinh = parseInt(sbd.substr(0,2)).toString();
						if (!PROVINE[ma_tinh][sbd].rank) PROVINE[ma_tinh][sbd].rank = {};
						if (!PROVINE[ma_tinh][sbd].rank[action]) PROVINE[ma_tinh][sbd].rank[action] = {};
						if (!PROVINE[ma_tinh][sbd].rank[action][khoi_thi]) PROVINE[ma_tinh][sbd].rank[action][khoi_thi] = {
							total : result.ranking[result.marks[sbd]].total.length,
							marks : result.marks[sbd],
							sum : result.sum,
							rank : result.ranking[result.marks[sbd]].rank
						}
					}
					
				
				}
				
				// Bảng điểm
				var keys = Object.keys(result.ranking).sort((a, b) => {return parseFloat(b) - parseFloat(a)});
				var dataTable = [], tmp, rank, total;
				keys.forEach((marks) => {
					rank = result.ranking[marks].rank;
					total = result.ranking[marks].total.length;
					result.ranking[marks].total.forEach((sbd) => {
						tmp = {					
							SBD : sbd,
							marks : marks,
							rank : rank,
							total : total,
							khoi_thi : khoi_thi, 
							sum : result.sum
						};
						KHOITHI[khoi_thi].forEach((mon) => {
							tmp[mon] = parseFloat(result.result[sbd][mon]).toFixed(2)
						});
						dataTable.push(tmp)
					});			
					
				});
				var columns = [
					{
						title : 'Xếp hạng',
						data : 'rank'
					},
					{
						title : 'Số báo danh',
						data : 'SBD'
					},
					{
						title : 'Tổng điểm',
						data : 'marks'
					},
					{
						title : 'Khối thi',
						data : 'khoi_thi'
					},
					{
						title : 'Thí sinh cùng điểm',
						data : 'total'
					},	
					{
						title : 'Tổng số thí sinh',
						data : 'sum'
					},			
				];
				KHOITHI[khoi_thi].forEach((mon) => {
					columns.push({
						title : TITLE_MONTHI[mon],
						data : mon
					});
				});
				
				if (!$('#tableResult').text().trim().length) {
					showTableResult(dataTable, columns);
				} else {
					TABLERESULT.destroy();
					showTableResult(dataTable, columns);
				}
				$('.titleTable').text(`TOP 10 THÍ SINH KHỐI ${khoi_thi} ${title_chart}`)
			
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'ĐÃ XỬ LÍ XONG',
					showConfirmButton: true,
					// timer: 1500
				})
				
				$('.notica').text('ĐÃ XỬ LÍ XONG');
				// console.log('ĐÃ PHÂN TÍCH XONG');
			} else { // Nhiều khối thi
				khoi_thi.forEach( async (khoi_thi_) => {
					$('.notica').text('PHÂN TÍCH KHỐI ' + khoi_thi_);
					Swal.fire({
						position: 'top-end',
						icon: 'warning',
						title: 'PHÂN TÍCH KHỐI ' + khoi_thi_,
						showConfirmButton: true,
						// timer: 1500
					})
					
					
					var result = rankingData(data, khoi_thi_);
					
					
					
					for(var sbd in result.result){
						if (result.marks[sbd]) {
							var ma_tinh = parseInt(sbd.substr(0,2)).toString();
							if (!PROVINE[ma_tinh][sbd].rank) PROVINE[ma_tinh][sbd].rank = {};
							if (!PROVINE[ma_tinh][sbd].rank[khoi_thi_]) PROVINE[ma_tinh][sbd].rank[khoi_thi_] = {};
							// if (!PROVINE[ma_tinh][sbd].rank[action]) PROVINE[ma_tinh][sbd].rank[action] = {};
							if (!PROVINE[ma_tinh][sbd].rank[khoi_thi_][action]) PROVINE[ma_tinh][sbd].rank[khoi_thi_][action] = {
								total : result.ranking[result.marks[sbd]].total.length,
								marks : result.marks[sbd],
								sum : result.sum,
								rank : result.ranking[result.marks[sbd]].rank
							}
						}
						
			
					}
					
				});
				// console.log('ĐÃ PHÂN TÍCH XONG');
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'ĐÃ PHÂN TÍCH XONG',
					showConfirmButton: true,
					// timer: 1500
				})
				
				$('.notica').text('ĐÃ PHÂN TÍCH XONG');
			}
		} catch (e) {
			Swal.fire({
				position: 'top-end',
				icon: 'error',
				title: e,
				showConfirmButton: true,
				// timer: 1500
			})
			
			$('.notica').text(e);
		}
	});
	
	
	function showTableResult(dataTable, columns){
		TABLERESULT = $('#tableResult').DataTable({
			data: dataTable, // JSON file to add data
			autoWidth: false,
			columns: columns,
			ordering: true,
			deferRender:    true,
            scrollY:        500,
            scrollCollapse: true,
            scroller:       true,
			dom: '<"row d-flex justify-content-between align-items-center m-1"' +
				'<"col-lg-6 d-flex align-items-center"l<"dt-action-buttons text-xl-right text-lg-left text-lg-right text-left "B>>' +
				'<"col-lg-6 d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap pr-lg-1 p-0"f<"invoice_status ml-sm-2">>' +
				'>t' +
				'<"d-flex justify-content-between mx-2 row"' +
				'<"col-sm-12 col-md-6"i>' +
				'<"col-sm-12 col-md-6"p>' +
				'>',
		});
	}
	*/
	
	// Phân tích dữ liệu điểm
	$('body').delegate('.viewPhodiem', 'click',async  function(event) {
		console.log("Bắt đầu xử lí");
		var logTime = Math.floor(Math.random() * 999);
		console.time('start' + logTime);		
		var actionSelect = action.val(),
		khoiThi = khoi_thi.val(),
		cumThi = cum_thi.val()
		
		if (Object.keys(DB.PROVINE).length !== DB.SHEET.length) {
			return showError("Hệ thống dữ liệu chưa được cập nhật");
		}
		
		if (actionSelect === "0"){
			return showError("Vui lòng lựa chọn hành động");
		}
		
		if (khoiThi[0] === "0" && khoiThi.length === 1) {
			return showError("Vui lòng lựa chọn khối thi");
		}
		
		
		
		var dataTMP = {};
		if (cumThi[0] === "0" && cumThi.length === 1) { // Chọn tất cả			
			for(var maTinh in DB.PROVINE){
				if (parseInt(maTinh)){
					dataTMP =  Object.assign({}, dataTMP, DB.PROVINE[maTinh]);
				}
			}
		} else {			
			cumThi.forEach((maTinh) => {
				if (parseInt(maTinh)){
					dataTMP =  Object.assign({}, dataTMP, DB.PROVINE[maTinh]);
				}
			});			
		}
		
		if (!Object.keys(dataTMP).length) {
			return showError("Chưa có dữ liệu điểm thi");
		}
		await loading.removeClass('hidden');
		
		var loadResult = buildDoiSanh(dataTMP, khoiThi, false );
		
		var nameSave = `${DB.YEAR - 1}_${actionSelect}`;
		if (actionSelect === "CT") {
			nameSave = `${DB.YEAR - 1}_${actionSelect}_${cumThi[0]}`;
		}
		var dataDoiSanh = await localforage.getItem(nameSave);
		var tmpR, tmpS;
		// console.log(loadResult);
		
		console.log("Bắt đầu phân tích");
		var keys = Object.keys(loadResult.result);
		
		console.log(keys.length, Object.keys(dataDoiSanh).length);
		
		var mTinh, arrMT = {}, tmpP;
		keys.forEach((sbd) => { // Danh sách thí sinh có điểm
			mTinh = parseInt(sbd.substr(0,2)).toString();
			if (!arrMT[mTinh]) arrMT[mTinh] = 1;  // Lưu những tỉnh có thay đổi
			tmpP = DB.PROVINE[mTinh];
			
			if (!tmpP) tmpP = {};
			if (!tmpP[sbd]) tmpP[sbd] = {};
			if (!tmpP[sbd].r) tmpP[sbd].r = {}; // Quản lí xếp hạng
			if (!tmpP[sbd].r[actionSelect]) tmpP[sbd].r[actionSelect] = {}; // Quản lí xếp hạng
			
			
			delete tmpP[sbd]['GIOI_TINH'];
			delete tmpP[sbd]['HO_TEN'];
			Object.keys(loadResult.result[sbd]).forEach((khoi) => { // Danh sahcs khôi thí của học sinh
				tmpR = loadResult.ranking[khoi][loadResult.result[sbd][khoi].m];
				tmpS = loadResult.arrSum[khoi];
				// loadResult.result[sbd][khoi].s = tmpS; // Tổng số thí sinh // sum
				// loadResult.result[sbd][khoi].r = tmpR.rank;// Xếp hạng điểm thi // rank
				// loadResult.result[sbd][khoi].c = tmpR.total.length; // Số thí sinh bằng điểm  // current
				// loadResult.result[sbd][khoi].d = findPerMarks(parseFloat((1 - (tmpR.rank  - 1)/tmpS) * 100).toFixed(6) , dataDoiSanh[khoi]);// Đối sánh
				
				tmpP[sbd].r[actionSelect][khoi]= {
					m : loadResult.result[sbd][khoi].m,
					s : tmpS,
					r : tmpR.rank,
					c : tmpR.total.length,
					d : findPerMarks(parseFloat((1 - (tmpR.rank  - 1)/tmpS) * 100).toFixed(6) , dataDoiSanh[khoi])
				}
				
				// Thêm vào luôn
			})			
		});
		// console.log();
		
		// Đẩy vào dữ liệu gốc
		/*var mTinh, arrMT = {}, tmpP;
		keys.forEach((sbd) => {
			mTinh = parseInt(sbd.substr(0,2)).toString();
			if (!arrMT[mTinh]) arrMT[mTinh] = 1;  // Lưu những tỉnh có thay đổi
			tmpP = DB.PROVINE[mTinh];
			if (!tmpP) tmpP = {};
			if (!tmpP[sbd]) tmpP[sbd] = {};
			if (!tmpP[sbd].r) tmpP[sbd].r = {}; // Quản lí xếp hạng
			if (!tmpP[sbd].r[actionSelect]) tmpP[sbd].r[actionSelect] = {}; // Quản lí xếp hạng
			Object.keys(loadResult.result[sbd]).forEach((khoi) => {
				// console.log(sbd, khoi, tmpP[sbd].r[actionSelect]);
				tmpP[sbd].r[actionSelect][khoi] = loadResult.result[sbd][khoi]
			})
			// console.log(tmpP[sbd]);
			// DB.PROVINE[mTinh][sbd].r[actionSelect] = loadResult.result[sbd];	
			// delete tmpP[sbd]['GIOI_TINH'];
			// delete tmpP[sbd]['HO_TEN'];
		});
		
		*/
		console.log("Bắt đầu cập nhật");
		var cnt = 0;
		// console.log(DB.PROVINE[mTinh]);
		mTinh = Object.keys(arrMT);
		mTinh.forEach(async (maTinh) => {		
			console.log("Đang cập nhật mã tỉnh " + maTinh);
			await localforage.setItem(`${DB.YEAR}_${maTinh}`, DB.PROVINE[maTinh] );
			cnt++;
			if (cnt === mTinh.length) {
				showError("Cập nhật dữ liệu thành công", "success");
				loading.addClass('hidden');
				
				console.log("Đã khởi tạo thành công");
				
				console.timeEnd('start' + logTime)
			}
		})	
		
	});
	// Lưu dữ liệu vào db
	$('body').delegate('.updateData', 'click', function(event) {
		var sum = 0;
		loading.removeClass('hidden');
		for(var code in DB.PROVINE){
			localforage.setItem(`${DB.YEAR}_` +code, DB.PROVINE[code]).then((value) => {
				sum++;			
				if (sum == Object.keys(DB.PROVINE).length) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'ĐÃ CẬP NHẬT XONG',
						showConfirmButton: true,
					})
					loading.addClass('hidden');
				}				
			})
		}
	});
	
	// Khởi tạo dữ liệu đối sánh
	$('body').delegate('.doiSanh', 'click', async function(event) {
		
		console.time('start');		
		var actionSelect = action.val(),
		khoiThi = khoi_thi.val(),
		cumThi = cum_thi.val()
		
		if (Object.keys(DB.PROVINE).length !== DB.SHEET.length) {
			return showError("Hệ thống dữ liệu chưa được cập nhật");
		}
		
		if (actionSelect === "0"){
			return showError("Vui lòng lựa chọn hành động");
		}
		
		if (khoiThi[0] === "0" && khoiThi.length === 1) {
			return showError("Vui lòng lựa chọn khối thi");
		}
		
		
		
		var dataTMP = {};
		if (cumThi[0] === "0" && cumThi.length === 1) { // Chọn tất cả			
			for(var maTinh in DB.PROVINE){
				if (parseInt(maTinh)){
					dataTMP =  Object.assign({}, dataTMP, DB.PROVINE[maTinh]);
				}
			}
		} else {			
			cumThi.forEach((maTinh) => {
				if (parseInt(maTinh)){
					dataTMP =  Object.assign({}, dataTMP, DB.PROVINE[maTinh]);
				}
			});			
		}
		
		if (!Object.keys(dataTMP).length) {
			return showError("Chưa có dữ liệu điểm thi");
		}
		await loading.removeClass('hidden');
		
		var loadResult = buildDoiSanh(dataTMP, khoiThi );
		
		var nameSave = `${DB.YEAR}_${actionSelect}`;
		if (actionSelect === "CT") {
			nameSave = `${DB.YEAR}_${actionSelect}_${cumThi[0]}`;
		}
		console.log("Lưu với tên " + nameSave);
		await localforage.setItem(nameSave, loadResult.matrixMarks);
		Swal.fire({
			icon: 'success',
			title: 'Tuyệt vời',
			text: 'Đã khởi tạo thành công với tên ' + nameSave,
			// footer: '<a href="">Why do I have this issue?</a>'
		})
		console.log("Đã khởi tạo thành công");
		loading.addClass('hidden');
		console.timeEnd('start')		
	});
	
	function buildDoiSanh(dataTMP, khoiThi, view = true){
		var marks, student, isexist, ranking = {}, result = {};
		for(var sbd in dataTMP){ // Xử lí theo từng học sinh
			student = dataTMP[sbd];
			//Tính điểm KHTN KHXH
			if (student.LI && student.HOA && student.SINH) {
				student.KHTN = parseFloat((parseFloat(student.LI) + parseFloat(student.HOA) +parseFloat(student.SINH)) / 3).toFixed(2);
			}
			if (student.SU && student.DIA && student.GDCD) {
				student.KHXH = parseFloat((parseFloat(student.SU) + parseFloat(student.DIA) +parseFloat(student.GDCD)) / 3).toFixed(2);
			}	
			
			
			khoiThi.forEach((khoi) => { // Từng khối thi
				marks = 0;	
				isexist	= 0;			
				if (!(DB.KHOI_THI[khoi].indexOf("NN") >-1) 
					|| (DB.KHOI_THI[khoi].indexOf("NN") >-1 
					&& checkKhoiThi(khoi, student.type)) ) {
					
					DB.KHOI_THI[khoi].forEach((mon) => {
						if (student[mon]) { // Tồn tại môn thi đó
							marks +=  parseFloat(student[mon]);
							isexist++;
						}
					});						
				}				
					
				if (isexist === DB.KHOI_THI[khoi].length) { // Tồn tại khối thi đó
					marks = parseFloat(marks).toFixed(2); // Chuyển sang text 2 chữ số thập phân
					
					//Lưu điểm học sinh
					if (!result[sbd]) result[sbd] = {};					
					if (!result[sbd][khoi]) result[sbd][khoi] = {};					
					result[sbd][khoi].m = marks;
					
					// Thống kê xếp hạng
					if (!ranking[khoi])  ranking[khoi] = {};
					if (!ranking[khoi][marks]) ranking[khoi][marks] = {
						// total : 0,
						total : [],
						rank : 0
					}
					// ranking[khoi][marks].total++;
					ranking[khoi][marks].total.push(sbd);
				}
			})			
		}
		
		////Xếp hạng
		var keys, current, arrSum = {}, matrixMarks = {};
		khoiThi.forEach((khoi) => { // Từng khối thi
			if (ranking[khoi]) {
				keys = Object.keys(ranking[khoi]).sort((a, b) => {return parseFloat(b) - parseFloat(a)});
				arrSum[khoi] = 0
				keys.forEach((marks, index) => {
					current = ranking[khoi][marks];
					arrSum[khoi] += current.total.length;
					current.rank = (ranking[khoi][keys[index - 1]] ?  (ranking[khoi][keys[index - 1]].rank  + ranking[khoi][keys[index - 1]].total.length ): 1);
				})	
			}				
		});
		// Tạo bảng đối sánh
		if (view){
			Object.keys(ranking).forEach((khoi) => {
				matrixMarks[khoi] = (buildPerMarks(ranking[khoi], arrSum[khoi]));
			})
		}
		
		return {
			arrSum,
			result,
			matrixMarks,
			ranking,
		}
	}
	
	function rankingData(data, khoithi){
		var student, length, marks, result = {}, ranking = {};
		// Khởi tạo dữ liệu
		for(var sbd in data){
			student = data[sbd];
			length = 0;
			marks = 0;
			
			if (student.LI && student.HOA && student.SINH) {
				student.KHTN = parseFloat((parseFloat(student.LI) + parseFloat(student.HOA) +parseFloat(student.SINH)) / 3).toFixed(2);
			}
			if (student.SU && student.DIA && student.GDCD) {
				student.KHXH = parseFloat((parseFloat(student.SU) + parseFloat(student.DIA) +parseFloat(student.GDCD)) / 3).toFixed(2);
			}
			
			
			if (!(KHOITHI[khoithi].indexOf("NN") >-1) || (KHOITHI[khoithi].indexOf("NN") >-1 && checkKhoiThi(khoithi, student.type)) ) {
				KHOITHI[khoithi].forEach((mon_thi) => {
					if (student[mon_thi]) { // Có môn đó
						length++;
						marks +=  parseFloat(student[mon_thi]);
						// if (mon_thi == "NN" ) marks +=  parseFloat(student[mon_thi]);
					}
				});
			}
			// if (KHOITHI[khoithi].indexOf("NN") >-1) { // Có ngoại ngữ
				// if (checkKhoiThi(khoithi, student.type)){
					// KHOITHI[khoithi].forEach((mon_thi) => {
						// if (student[mon_thi]) { // Có môn đó
							// length++;
							// marks += parseFloat(student[mon_thi]);
						// }
					// });
				// } 
			// } else { // Không có ngoại ngữ
				// KHOITHI[khoithi].forEach((mon_thi) => {
					// if (student[mon_thi]) { // Có môn đó
						// length++;
						// marks += parseFloat(student[mon_thi]);
					// }
				// });
			// }
			
			if (length == KHOITHI[khoithi].length) { // Có điểm khối thi đó
				marks = parseFloat(marks).toFixed(2);
				result[sbd] = marks;
				
				if (!ranking[marks]) ranking[marks] = {
					total : [],
					rank : 0
				}
				
				ranking[marks].total.push(sbd);
			}
		}
		//Xếp hạng
		var keys = Object.keys(ranking).sort((a, b) => {return parseFloat(b) - parseFloat(a)});
		var sum = 0;
		keys.forEach((marks, index) => {
			sum += ranking[marks].total.length;
			ranking[marks].rank = (ranking[keys[index - 1]] ?  (ranking[keys[index - 1]].rank  + ranking[keys[index - 1]].total.length ): 1)
		})
		
		// Đẩy dữ liệu vô toàn cục
		// for(var sbd in data){
			// if (!DATASBD[sbd].rank) DATASBD[sbd].rank = {};
			// if (!DATASBD[sbd].rank[$]) 
		// }
		
		
		// console.log(data);
		return {
			result : data,
			ranking : ranking,
			sum : sum,
			marks : result
		}
	}
	
	function showError(title, type = "error"){
		Swal.fire({
			icon: type,
			title: 'Oops...',
			text: title,
			footer: '<a href="">Why do I have this issue?</a>'
		})
	}
	$('body').delegate('.exportExcel', 'click', function(event) {
		loading.removeClass('hidden');
		for(var ma_tinh in DB.PROVINE){
			exportData(ma_tinh);
		}
		loading.addClass('hidden');
	});
	
	
	
	function exportData(ma_tinh){
		var filename = `${ma_tinh} - Dữ liệu điểm thi 2021.csv`;
		var dataExport = [];
		for(var sbd in DB.PROVINE[ma_tinh]){
			dataExport.push([JSON.stringify(DB.PROVINE[ma_tinh][sbd])]);
		}
		var wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(dataExport);
		XLSX.utils.book_append_sheet(wb, ws, "MARKS");
		XLSX.writeFile(wb, filename);
	}
	
	function connectServer(data, callback) { // Đẩy dữ liệu lên hệ thống
		$.ajax({
			crossDomain: true,
			url: HOST,
			type: 'POST',
			data: JSON.stringify(data),
			dataType: "json",
			processData: false,
			beforeSend: () => {
				// logs("Đang thực hiện lệnh " + data.action, 'warning');
			},
			success: function (response) {
				callback(response);
			},
			error: function (error) {
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: error,
					showConfirmButton: true,
					// timer: 1500
				})
			}
		})
	}
	
	function getSheetData(year){
		connectServer({
			action : 'list',
			year : year
		}, (response) => {
			console.log(response);
			if (!response.status)  return showError(response.title);			
			DB.SHEET = response.data.sort((a, b) => {return parseInt(a.code) - parseInt(b.code) });
			buildTable();			
		})
	}
	
	
	if (searchParams.has('year') && searchParams.get('year')){
		DB.YEAR = parseInt(searchParams.get('year'));
		getSheetData(DB.YEAR);
	} else {
		Swal.fire({
			title: 'NHẬP NĂM LÀM VIỆC',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Xong',
		}).then((result) => {
			if (result.isConfirmed) {
				if (result.value.length !== 4) return showError('NĂM LÀM VIỆC KHÔNG HỢP LỆ');
				
				DB.YEAR  = parseInt(result.value);
				Swal.fire({
					// position: 'top-end',
					icon: 'success',
					title: 'THIẾP LẬP NĂM ' + DB.YEAR,
					showConfirmButton: false,
					timer: 1500
				})
				getSheetData(DB.YEAR);
			} else {
				window.location.href = 'https://taodethi.xyz'
			}
		})
	}
	
	
	// Tìm điểm theo phần trăm
	function findPerMarks(per, data){ // Tìm điểm theo phần trăm
		var result = null;
		data.slice().reverse().every((value, index, arr) => {
			if (parseFloat(per) > parseFloat(value.per) && parseFloat(per) <= parseFloat(arr[index + 1].per)) {
				result = (parseFloat(per) === parseFloat(arr[index + 1].per)) ? (arr[index + 1]) : value;				
				return false
			}
			return true;
		})
		return result.marks;
	}
	
	// Xây dựng bảng database ranking
	function buildPerMarks(ranking, sum){
		var keys = Object.keys(ranking).sort((a, b) => {return parseFloat(b) - parseFloat(a)});
		var result = [];
		keys.forEach((marks, index) => {
			result.push({
				per : parseFloat((1 - (ranking[marks].rank  - 1)/sum) * 100).toFixed(6),
				marks : marks
			})
		});
		result.push({
			per : "-1",
			marks : result[keys.length - 1].marks	
		})
		return result
	}
// });