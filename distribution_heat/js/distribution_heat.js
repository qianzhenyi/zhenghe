var chart = echarts.init(document.getElementById('main'));
chart.setOption({
     
//    tooltip: {
//      trigger: 'item',
//      formatter: '{b}'
//  },
//
//  
//  geo: [
//      {
//          name: '世界地图',
//          type: 'map',
//          map: 'world',
////          roam: true,
//          selectedMode : 'single',
//  
//          label:{
//              normal: {
//                 
//                  show:false,
//                  formatter: function (params) {
//                      return nameMap[params.name];
//                  },
//                 
//              },
//              emphasis: {
//              	textStyle: {
//							   color: "transparent"
//									},
//                  label:{
//                      show:true
//                  }
//              }
//          },
//            
//          itemStyle:{
//        
//				normal:{
//			    
//					areaColor:'#8b415c',
//					borderColor: '#b8738d',
//					borderWidth: 0.5,
//						},							
//							
//				    emphasis:{
//				    areaColor:'#8b415c',	
//					 
//					},		
//				},	
//       
//        }],
//


     roam: true,
     series: [{
     data:[
     	{name:'Russia',itemStyle:{emphasis:{areaColor:'rgb(202,74,75)'},normal:{label:{textStyle:{color:'black',fontSize:'30'}}}}},
      	{name:'China',itemStyle:{emphasis:{areaColor:'white'},normal:{label:{textStyle:{color:'black',fontSize:'30'}}}}},
      	{name:'Japan',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Australia',itemStyle:{emphasis:{areaColor:'rgb(202,154,122)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'India',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Malaysia',itemStyle:{emphasis:{areaColor:'rgb(223,199,117)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'United States of America',itemStyle:{emphasis:{areaColor:'rgb(252,242,111)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Mexico',itemStyle:{emphasis:{areaColor:'pink'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Brazil',itemStyle:{emphasis:{areaColor:'yellowgreen'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Spain',itemStyle:{emphasis:{areaColor:'teal'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'France',itemStyle:{emphasis:{areaColor:'rgb(8,33,78)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Germany',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'United Kingdom',itemStyle:{emphasis:{areaColor:'orange'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'Italy',itemStyle:{emphasis:{areaColor:'pink'},normal:{label:{textStyle:{color:'black'}}}}},
      	{name:'South Korea',itemStyle:{emphasis:{areaColor:'white'},normal:{label:{textStyle:{color:'black'}}}}},
      	
      	

      ],	

      type: 'map',
      map: 'world',
      

            itemStyle:{
				normal:{
				    
					areaColor:'#8b415c',
					label:{
							show:true,
							textStyle: {
							   color: 'transparent'
									}
						  },
					borderColor: '#b8738d',
					borderWidth: 0.5,
							},
							
							
				    emphasis:{

					  areaColor:'#8b415c',	
					},		
				},	
     }]
 });    
 

 chart.on('click',function(params){
 	var country=params.name;
 	if(country=='China'){
 		window.location.href='../contury_detail/contury_detail_010.html';
 	}else if(country=='Japan'){
 		window.location.href='../contury_detail/contury_detail_014.html';
 	}else if(country=='Australia'){
 		window.location.href='../contury_detail/contury_detail_007.html';
 	}else if(country=='India'){
 		window.location.href='../contury_detail/contury_detail_009.html';
 	}else if(country=='Russia'){
 		window.location.href='../contury_detail/contury_detail_001.html';
 	}else if(country=='Malaysia'){
 		window.location.href='../contury_detail/contury_detail_013.html';
 	}else if(country=='United States of America'){
 		window.location.href='../contury_detail/contury_detail_008.html';
 	}else if(country=='Mexico'){
 		window.location.href='../contury_detail/contury_detail_012.html';
 	}else if(country=='Brazil'){
 		window.location.href='../contury_detail/contury_detail_003.html';
 	}else if(country=='Spain'){
 		window.location.href='../contury_detail/contury_detail_005.html';
 	}else if(country=='France'){
 		window.location.href='../contury_detail/contury_detail_004.html';
 	}else if(country=='Germany'){
 		window.location.href='../contury_detail/contury_detail_006.html';
 	}else if(country=='United Kingdom'){
 		window.location.href='../contury_detail/contury_detail_011.html';
 	}else if(country=='Italy'){
 		window.location.href='../contury_detail/contury_detail_002.html';
 	}else if(country=='South Korea'){
 		window.location.href='../contury_detail/contury_detail_015.html';
 	}
 })
 

 
//        regions: [{
//      name: 'China',
//   itemStyle: {
//    normal: {
//        areaColor: 'red',
//        color: 'red'
//    }
//}
//}],
 
 
 
// })
 
//  series: [{
////      date:[
////      {name:'Brazil',itemStyle:{normal:{areaColor:'pink'}}}
////      ],
//      type: 'map',
//      map: 'world',
//    left:'50px',
//    top:'50px',
////      layoutCenter:['50%', '30%'],
//      layoutSize: 1300,
//      data:[{
//      	name:'Russia',itemStyle:{emphasis:{areaColor:'rgb(202,74,75)'}},
//      	name:'China',itemStyle:{emphasis:{areaColor:'white'}},
//      	
//      }],
//      
//      itemStyle:{
//				normal:{
//				    
//					areaColor:'#8b415c',
//					label:{
//							show:true,
//							textStyle: {
//							   color: "transparent"
//									}
//						  },
//					borderColor: '#b8738d',
//					borderWidth: 0.5,
//							},
//							
//							
//				    emphasis:{
//					  areaColor:'rgb(254,217,138)',	
//					},		
//				},		
//						
////	    scaleLimit:{
////	    	nameMap:{
////	    		'China' : '中国'
////	    	},
////	    },
////			   emphasis:{
////					areaStyle:{
////								color:'red'},
////						label:{
////								show:true,
////								color:'red',
////								textStyle: {
////								 color: "blue"
////								    }
////							  }
////						}
////				}
//
//  }]

// }); 