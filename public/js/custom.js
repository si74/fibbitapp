				function insertData(data,map,featureLayer){
						var dataObject = data.vets;
					   	//drop markers for mapbox.js object
						for (i=0; i < dataObject.length; i++){

							var myIcon = L.icon({
									iconUrl: ('images/dog_paw_glypish.png'),
									className: ('vname vet'+i.toString())
								});
							//add marker to map
							L.marker([dataObject[i].latitude,dataObject[i].longitude],{
								clickable:true,
								title: dataObject[i].name,
								opacity: 1,
								icon: myIcon
							})
							.addTo(featureLayer);
							//.bindPopup('<button>' + dataObject[i].name +'</button><button id="vet'+i+'">See info!</div>')
							
							//check if web_url exists
							if (dataObject[i].web_url == ''){ 
								var web_url = '';
							}else{
								var web_url = '<div id="fbt_url"><b>Web: </b><a href="'+dataObject[i].web_url+'">'+dataObject[i].web_url+'<a/></div>';
							}

							//check if facebook url exists
							if (dataObject[i].fb_url == ''){ 
								var fb_url = '';
							}else{
								var fb_url = '<div id="fbt_fb_url"><b>Web: </b><a href="'+dataObject[i].fb_url+'">'+dataObject[i].fb_url+'<a/></div>';
							}

							//check if twitter url exists
							if (dataObject[i].twitter_url == ''){ 
								var t_url = '';
							}else{
								var t_url = '<div id="fbt_t_url"><b>Web: </b><a href="'+dataObject[i].twitter_url+'">'+dataObject[i].twitter_url+'<a/></div>';
							}

							//check if price of office visit exists
							if (dataObject[i].prices.office_visit == -1){
								var price = ''; 
							}else{
								var price = '<div id="fbt_price"><b>Office Visit: </b>'+dataObject[i].prices.office_visit+'<a/></div>';
							}

							//check if AAHA-certified
							if (!dataObject[i].aaha){
								var aaha = ''; 
							}else{
								var aaha = '<div id="fbt_aaha"><b>AAHA-certified</b></div>';
							}
							
							//check if Cat-friendly
							if (!dataObject[i].cat_friendly){
								var cat_friendly = ''; 
							}else{
								var cat_friendly = '<div id="fbt_cat"><b><img src="images/cat.png"/>Cat friendly!</b></div>';
							}
							
							//check if 24 hour vet
							if (!dataObject[i].t_24_hour){
								var t_24 = ''; 
							}else{
								var t_24 = '<div id="fbt_24"><b><img src="images/time_clock.png"/>Open 24 hours</b></div>';
							}
							
							//check if care credit is accepted
							if (!dataObject[i].care_credit){
								var care_credit = ''; 
							}else{
								var care_credit = '<div id="fbt_care"><b>Care Credit Accepted</b></div>';
							}

							//check if pet insurance accepted
							if (!dataObject[i].pet_insurance){
								var pet_insurance = ''; 
							}else{
								var pet_insurance = '<div id="fbt_insurance"><b>Pet insurance Accepted</b></div>';
							}
							
							//check if low cost vet
							if (!dataObject[i].low_cost){
								var low_cost = ''; 
							}else{
								var low_cost = '<div id="fbt_low"><b>Low Cost Option</b></div>';
							}
							
							//check if home visit vet
							//<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
							if (!dataObject[i].house_visit){
								var house_visit = ''; 
							}else{
								var house_visit = '<div id="fbt_home"><b>Makes house calls</b></div>';
							}

							//add hour info
							if (dataObject[i].hours.m == ''){
								var hours = ''; 
							}else{
								var hours = '<div id="fbt_home"><b>Hours:</b><br/> \
											m:   '+dataObject[i].hours.m+'<br/> \
											t:   '+dataObject[i].hours.t+'<br/> \
											w:   '+dataObject[i].hours.w+'<br/> \
											th:  '+dataObject[i].hours.th+'<br/> \
											f:   '+dataObject[i].hours.f+'<br/> \
											sat: '+dataObject[i].hours.sat+'<br/> \
											su:  '+dataObject[i].hours.su+'<br/> \
											</div>';
							}
							
							//add vet info to right side of page
							$('.fbt-body-right').append('<div class="fbt_vet" id="vet'+i+'"> \
															 <h4 id="fbt_vet_name">'+dataObject[i].name+'</h4> \
															 '+ web_url + ' \
															 <div id="fbt_yelp"> <b>Yelp:</b> <a href="'+dataObject[i].url+'">'+dataObject[i].url+'</a></div> \
															 <div id="fbt_phone"><img src="images/phone1.png"/><b>'+dataObject[i].display_phone+'</b></div> \
															 <div id="address"><img src="images/house.png"/>'+dataObject[i].address+'</div> \
															 '+hours+' \
															 '+price+' \
															 '+aaha+cat_friendly+t_24+care_credit+pet_insurance+low_cost+house_visit+' \
														</div> ' );
						}

													//function to roll to 
						$('.vname').on('click',function(){
							var full_class_name = $(this).attr('class');
							var full_class_array = full_class_name.split(" ");
							for (x in full_class_array){
								if (full_class_array[x].indexOf('vet') > -1){
									console.log(full_class_array[x]);
									aTag = $('#'+full_class_array[x]);
    								$('.fbt-body-right').animate({scrollTop: aTag.position().top},'slow');
								}
							}
							
						});

				  }

			$(document).ready(function(){

				//initialize mapbox.js map
				$('.fbt-body-center').append("<div id='fbt_map'></div>");
				L.mapbox.accessToken = 'pk.eyJ1Ijoic2k3NCIsImEiOiJLdGEwMVVjIn0.8AaQpogJEzYTU1nRDushsA';
				var map = L.mapbox.map('fbt_map', 'si74.la690i93').setView([40.7470, -73.9860],13);
				
				// Create empty layer
				var featureLayer = L.mapbox.featureLayer().addTo(map);


				//Function to check for changing check marks
				$.ajax({
					url: "/search",
					type:"POST",
					data:{},
					contentType:"application/json; charset=utf-8",
					dataType:"json",
					success: function(data){
						insertData(data,map,featureLayer);
					}
				});

				//function to check the checkbox situation 
				$('.filter_check').change(function(){

					//clear map layer & html
					featureLayer.clearLayers();
					$('.fbt-body-right').html('');

					//post values 
					var val = {};

					if ($('#aaha_check').is(':checked')){ val.aaha = true; }
					if ($('#cat_check').is(':checked')){ val.cat_friendly = true; }
					if ($('#house_check').is(':checked')){ val.house_visit = true; }
					if ($('#twofour_check').is(':checked')){ val['t_24_hour'] = true; }
					if ($('#low_check').is(':checked')){ val['low_cost'] = true; }
					if ($('#cc_check').is(':checked')){ val['care_credit'] = true; }
					if ($('#insurance_check').is(':checked')){ val['pet_insurance'] = true; }
					if ($('#payment_check').is(':checked')){ val['payment_plan'] = true; }

					$.ajax({
					url: "/search",
					type:"POST",
					data: JSON.stringify(val),
					contentType:"application/json; charset=utf-8",
					dataType:"json",
					success: function(data){
							insertData(data,map,featureLayer);
						}
					});


				})


			})