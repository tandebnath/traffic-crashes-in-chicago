(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1884:function(e,t,a){Promise.resolve().then(a.bind(a,4197))},4197:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var i=a(7437),s=a(2265),n=a(4833),r=a.n(n),o=()=>{let[e,t]=(0,s.useState)(!0);return(0,i.jsxs)("div",{className:r().hero,children:[(0,i.jsx)("video",{id:"hero-video",src:"video.mp4",autoPlay:!0,className:r().video,onEnded:()=>t(!0)}),e&&(0,i.jsxs)("div",{className:r().overlay,children:[(0,i.jsx)("span",{className:r().text,children:"Traffic Crashes in Chicago"}),(0,i.jsx)("span",{className:r().subText,children:"Kinda fast, really furious"})]})]})},l=a(2892),c=a.n(l),d=()=>(0,i.jsx)("div",{className:c().container,children:(0,i.jsxs)("div",{className:c().topSection,children:[(0,i.jsx)("img",{src:"crashes-nobg.png",className:c().image}),(0,i.jsx)("p",{className:c().text,children:"In conclusion.."})]})}),h=a(565),u=a.n(h);let m=[{year:"2019",data:[{category:"Below 18",Male:921,Female:681,Unknown:2},{category:"18-29",Male:23982,Female:18962,Unknown:59},{category:"30-39",Male:20604,Female:14737,Unknown:51},{category:"40-49",Male:16714,Female:10622,Unknown:34},{category:"50-59",Male:14804,Female:8191,Unknown:34},{category:"Above 60",Male:13424,Female:7506,Unknown:27}]},{year:"2022",data:[{category:"Below 18",Male:839,Female:548,Unknown:0},{category:"18-29",Male:20678,Female:16318,Unknown:59},{category:"30-39",Male:17843,Female:13419,Unknown:35},{category:"40-49",Male:14087,Female:9253,Unknown:23},{category:"50-59",Male:11920,Female:6992,Unknown:23},{category:"Above 60",Male:11438,Female:6360,Unknown:12}]}],p=[{year:"2019",data:[{id:1,label:"Sunday",value:14223},{id:2,label:"Monday",value:16474},{id:3,label:"Tuesday",value:17363},{id:4,label:"Wednesday",value:16580},{id:5,label:"Thursday",value:17030},{id:6,label:"Friday",value:18697},{id:7,label:"Saturday",value:17393}]},{year:"2022",data:[{id:1,label:"Sunday",value:13723},{id:2,label:"Monday",value:14471},{id:3,label:"Tuesday",value:15316},{id:4,label:"Wednesday",value:15243},{id:5,label:"Thursday",value:15571},{id:6,label:"Friday",value:17803},{id:7,label:"Saturday",value:16272}]}];var y=a(9586),g=e=>{let{data:t}=e;return(0,i.jsx)(y.Fk,{data:t,height:500,width:500,keys:["Male","Female","Unknown"],indexBy:"category",margin:{top:70,right:80,bottom:40,left:80},borderColor:{from:"color"},gridLabelOffset:36,dotSize:10,dotColor:{theme:"background"},dotBorderWidth:2,colors:{scheme:"set1"},blendMode:"multiply",motionConfig:"wobbly",legends:[{anchor:"top-left",direction:"column",translateX:-50,translateY:-40,itemWidth:80,itemHeight:20,itemTextColor:"#15425f",symbolSize:12,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#15425f"}}]}]})},x=a(4297);let f=[{value:"2019",label:"Year 2019"},{value:"2022",label:"Year 2022"}];var _=()=>{(0,s.useRef)(null);let[e,t]=(0,s.useState)("2019"),[a,n]=(0,s.useState)(m[0].data),[r,o]=(0,s.useState)(p[0].data);return(0,s.useEffect)(()=>{n(m.filter(t=>t.year===e)[0].data),o(p.filter(t=>t.year===e)[0].data)},[e]),console.log(r),(0,i.jsxs)("div",{className:u().container,children:[(0,i.jsx)("div",{className:u().select,children:(0,i.jsx)(x.ZP,{options:f,placeholder:"Select Year",defaultValue:{value:"2019",label:"Year 2019"},onChange:e=>t(e.value)})}),(0,i.jsxs)("div",{className:u().mapContainer,children:["2019"===e?(0,i.jsx)("iframe",{width:"640px",style:{minWidth:"640px"},height:"640px",src:"https://clausa.app.carto.com/map/205aa376-0dec-42b4-8588-54ffa2eac93d"}):(0,i.jsx)("iframe",{width:"640px",style:{minWidth:"640px"},height:"640px",src:"https://clausa.app.carto.com/map/c0de751b-4436-4e80-8cad-b6ef33e3de59"}),(0,i.jsxs)("div",{className:u().content,children:[(0,i.jsxs)("span",{className:u().text,children:["In"," ",(0,i.jsx)("span",{className:u().emphasizedText,children:e}),","," ","there were a total of",(0,i.jsx)("span",{className:u().emphasizedText,children:"2019"===e?"117,760":"108,399"})," ","traffic-related crashes in the city of Chicago."]}),(0,i.jsx)("p",{className:u().subText,children:"As per Illinois statute, only crashes with a property damage value of $1,500 or more or involving bodily injury to any person(s) and that happen on a public roadway and that involve at least one moving vehicle, except bike dooring, are considered reportable crashes. However, the Chicago Police Department records every reported traffic crash event, regardless of the statute of limitations."})]})]}),(0,i.jsxs)("p",{className:"".concat(u().text," ").concat(u().hitAndRunText),children:["Of these,"," ",(0,i.jsx)("span",{className:u().emphasizedText,children:"2019"===e?"31,953":"35,556"})," ","were Hit and Run cases."]}),(0,i.jsxs)("div",{className:u().radarContainer,children:[(0,i.jsx)("p",{className:u().text,children:"Well, who's behind the wheels?"}),(0,i.jsxs)("span",{className:u().subText,children:["An age-wise distribution reveals the majority of crashes occur when an 18-39 year old is driving."," "]}),(0,i.jsxs)("span",{className:u().subText,children:["Additionally, fun (?) fact: a 90+ year old driver was involved in"," ",(0,i.jsx)("b",{children:"2019"===e?"229":"129"})," crashes."]}),(0,i.jsx)(g,{data:a})]})]})},v=a(4724),b=a.n(v),C=a(4761),T=()=>(0,i.jsxs)("div",{className:b().container,children:[(0,i.jsxs)("div",{className:b().injuriesContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:b().text,children:"Types of Injuries and Their Distribution Across the Week"}),(0,i.jsx)("p",{className:b().subText,children:"We see how the injuries in the reported crashes are distributed across the different days of the week. We observed that in both years (2019 and 2022), most of the injuries were reported during the weekends (between Friday and Sunday) and lower during the weekdays. In addition, the data also showed that fewer crashes resulted to fatal injuries. The majority of crashes resulted to non-incapacitating, non-evident and a few incapacitating injuries."})]}),(0,i.jsxs)("div",{className:b().viz,children:[(0,i.jsx)(C.Z,{spec:{data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv"},title:{text:"2019 Reported Injuries",fontSize:25},width:400,height:250,background:"#fcf0e1",mark:{type:"bar",tooltip:!0},transform:[{filter:"datum.MOST_SEVERE_INJURY !== null"}],encoding:{x:{aggregate:"sum",field:"INJURIES_TOTAL",type:"quantitative",title:"Total Injuries",axis:{grid:!0,labelFontSize:14,titleFontSize:20}},y:{field:"CRASH_DAY_OF_WEEK",type:"ordinal",title:"Day of the Week",axis:{grid:!0,labelFontSize:14,titleFontSize:20}},color:{field:"MOST_SEVERE_INJURY",title:"Injury",legend:null},tooltip:[{field:"MOST_SEVERE_INJURY",title:"Injury Type"},{field:"INJURIES_TOTAL",aggregate:"sum",title:"Total Injuries",type:"quantitative"}]},config:{view:{stroke:null},axis:{grid:!1}}}}),(0,i.jsx)(C.Z,{spec:{data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv"},title:{text:"2022 Reported Injuries",fontSize:25},width:400,height:250,background:"#fcf0e1",mark:{type:"bar",tooltip:!0},transform:[{filter:"datum.MOST_SEVERE_INJURY !== null"}],encoding:{x:{aggregate:"sum",field:"INJURIES_TOTAL",type:"quantitative",title:"Total Injuries",axis:{grid:!0,labelFontSize:14,titleFontSize:20}},y:{field:"CRASH_DAY_OF_WEEK",type:"ordinal",title:"Day of the Week",axis:{grid:!0,labelFontSize:14,titleFontSize:20}},color:{field:"MOST_SEVERE_INJURY",legend:"Injury Type",title:"Injury Type",labelFontSize:15},tooltip:[{field:"MOST_SEVERE_INJURY",title:"Injury Type"},{field:"INJURIES_TOTAL",aggregate:"sum",title:"Total Injuries",type:"quantitative"}]},config:{view:{stroke:null},axis:{grid:!1},legend:{orient:"left",title:"Injury Type",padding:5,titlePadding:5,labelFontSize:10,symbolSize:100}}}})]})]}),(0,i.jsxs)("div",{className:b().causesContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:b().text,children:"Comparing the Primary Causes of Crashes and their Respective Damages"}),(0,i.jsx)("p",{className:b().subText,children:"For both years, we wanted to compare the major causes of the reported crashes and evaluate the damage involved in these incidents. The damages were classified into 3 categories, (below 500, 500-1500 and above 1500 dollars). In both years, the majority of the accidents involve damages that are over 1500 dollars. Interestingly, the primary cause of the majory of crashes in both years was not determined. However, other major causes of the accidents included failing to yield, following too closely, failing to reduce speed, improper lane usage, turning and overtaking."})]}),(0,i.jsx)(C.Z,{spec:{data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv"},width:750,height:375,title:{text:"Damage impact 2019",fontSize:25},background:"#fcf0e1",transform:[{calculate:"1",as:"Crashes"}],mark:{type:"circle",opacity:.8,stroke:"black",strokeWidth:1},encoding:{x:{field:"PRIM_CONTRIBUTORY_CAUSE",type:"ordinal",title:"Primary Cause",axis:{grid:!0,labelFontSize:11,titleFontSize:20}},y:{field:"DAMAGE",type:"nominal",axis:{title:"Damage Caused",labelFontSize:14,titleFontSize:20}},size:{field:"Crashes",type:"quantitative",aggregate:"sum",title:"Crashes",legend:{clipHeight:30},scale:{rangeMax:5e3}},color:{field:"DAMAGE",type:"nominal",legend:!0},tooltip:[{field:"Crashes",aggregate:"sum",title:"Number of Crashes"},{field:"PRIM_CONTRIBUTORY_CAUSE",title:"Primary Contributory Cause"}]}}}),(0,i.jsx)(C.Z,{spec:{data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv"},width:750,height:375,title:{text:"Damage impact 2022",fontSize:25},background:"#fcf0e1",transform:[{calculate:"1",as:"Crashes"}],mark:{type:"circle",opacity:.8,stroke:"black",strokeWidth:1},encoding:{x:{field:"PRIM_CONTRIBUTORY_CAUSE",type:"ordinal",title:"Primary Cause",axis:{grid:!0,labelFontSize:11,titleFontSize:20}},y:{field:"DAMAGE",type:"nominal",axis:{title:" Damage Caused",labelFontSize:14,titleFontSize:20}},size:{field:"Crashes",type:"quantitative",aggregate:"sum",title:"Crashes",legend:{clipHeight:30},scale:{rangeMax:5e3}},color:{field:"DAMAGE",type:"nominal",legend:!1},tooltip:[{field:"Crashes",aggregate:"sum",title:"Number of Crashes"},{field:"PRIM_CONTRIBUTORY_CAUSE",title:"Primary Contributory Cause"}]}}})]})]}),j=a(7552),S=a.n(j),N=()=>(0,i.jsxs)("div",{className:S().container,children:[(0,i.jsxs)("div",{className:S().weatherContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:S().text,children:"Crash Trends by Weather and Time"}),(0,i.jsx)("p",{className:S().subText,children:"The first chart is a bar graph indicating the total number of crashes associated with various weather conditions. The second chart is a line graph that shows the monthly distribution of crashes, filtered by the selected weather condition from the bar graph above."})]}),(0,i.jsx)(C.Z,{spec:{data:{url:"https://raw.githubusercontent.com//chuzesta//chuzesta//main//crashes_2019.csv",format:{type:"csv"}},hconcat:[{width:350,height:200,mark:"bar",selection:{weatherSelect:{type:"single",fields:["WEATHER_CONDITION"],bind:{input:"select",options:[null,"CLEAR","RAIN","SNOW","FOG/SMOKE/HAZE","SLEET/HAIL","FREEZING RAIN/DRIZZLE","BLOWING SNOW","SEVERE CROSSWINDS","BLOWING SAND, SOIL, DIRT"],name:"Select Weather: "}}},encoding:{x:{field:"WEATHER_CONDITION",type:"nominal",axis:{title:"Weather Type"}},y:{aggregate:"count",type:"quantitative",axis:{title:"Total Crashes"}}}},{width:350,height:200,transform:[{filter:{selection:"weatherSelect"}}],mark:"line",encoding:{x:{field:"CRASH_MONTH",type:"ordinal",axis:{title:"Month of the Year"}},y:{aggregate:"count",type:"quantitative",axis:{title:"Crashes Count"}},color:{field:"WEATHER_CONDITION",type:"nominal",legend:{title:"Weather Conditions"}}}}],config:{background:"#FCF0E1"}}})]}),(0,i.jsxs)("div",{className:S().speedLimitContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:S().text,children:"Speed Limits vs. Crashes Analysis"}),(0,i.jsx)("p",{className:S().subText,children:"The visualization consists of two horizontally aligned charts: the top scatter plot displays total injuries against posted speed limits, revealing a distribution of accidents and associated injuries at various speeds. The right bar chart shows the frequency of crashes at different posted speed limits, with a notable spike in the number of crashes at the lower speed limit range"})]}),(0,i.jsx)(C.Z,{spec:{data:{url:"https://raw.githubusercontent.com//chuzesta//chuzesta//main//crashes_2019.csv",format:{type:"csv"}},hconcat:[{width:350,height:200,mark:"point",selection:{brush:{type:"interval",encodings:["x"]}},encoding:{x:{field:"POSTED_SPEED_LIMIT",type:"quantitative",axis:{title:"Posted Speed Limit (mph)"}},y:{field:"INJURIES_TOTAL",type:"quantitative",axis:{title:"Total Injuries"}}}},{width:350,height:200,mark:"bar",encoding:{x:{field:"POSTED_SPEED_LIMIT",type:"quantitative",scale:{domain:{selection:"brush"}},axis:{title:"Posted Speed Limit (mph)"}},y:{aggregate:"count",type:"quantitative",axis:{title:"Number of Crashes"}}}}],config:{background:"#FCF0E1"}}})]})]}),E=a(5004),I=a.n(E),w=()=>(0,i.jsxs)("div",{className:I().container,children:[(0,i.jsxs)("div",{className:I().hourContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:I().text,children:"Car Crash Injury VS Time of Day"}),(0,i.jsx)("p",{className:I().subText,children:"This graph allows you to see the relationship between Car Crash Injury and the time of day that the car crash happens. With the selection you can browse through the month. Generally crashes occur most readily throughout the daytime, with both from before 2019 and 2022 having a relatively uniform distribution of car crashes throughout the year."})]}),(0,i.jsx)(C.Z,{spec:{background:"#fcf0e1",hconcat:[{data:{name:"A",url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv"},width:400,height:400,params:[{name:"Month_Select",value:"1",select:{type:"point",fields:["Month"]},bind:{input:"select",options:["1","2","3","4","5","6","7","8","9","10","11","12"]}}],mark:"circle",encoding:{x:{field:"CRASH_HOUR",type:"quantitative",axis:{title:"Hour of the Day 2019"}},y:{field:"INJURIES_TOTAL",type:"quantitative",scale:{domain:[0,15]},axis:{tickCount:13,title:"Total Injuries"}},size:{value:300},color:{condition:{param:"Month_Select",value:"rgba(20, 160, 130, 0.12)"},value:"transparent"}}},{data:{name:"B",url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv"},width:400,height:400,params:[{name:"Month_Select",value:"1",select:{type:"point",fields:["Month"]},bind:{input:"select",options:["1","2","3","4","5","6","7","8","9","10","11","12"]}}],mark:"circle",encoding:{x:{field:"CRASH_HOUR",type:"quantitative",axis:{title:"Hour of the Day 2022"}},y:{field:"INJURIES_TOTAL",type:"quantitative",scale:{domain:[0,15]},axis:{tickCount:13,title:"Total Injuries"}},size:{value:300},color:{condition:{param:"Month_Select",value:"rgba(20, 160, 130, 0.12)"},value:"transparent"}}}],config:{}}})]}),(0,i.jsxs)("div",{className:I().monthContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:I().text,children:"Weather conditions and how they affect car crash injuries throughout the year"}),(0,i.jsx)("p",{className:I().subText,children:"This graph allows you to select through the weather conditions of car crashes, and then seeing the distribution of these weather conditions through the months of the year. The y axis denotes how many injuries took place in each car crash, the darker the point, the more that it has occured."})]}),(0,i.jsx)(C.Z,{spec:{background:"#fcf0e1",hconcat:[{data:{name:"A",url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv"},width:400,height:400,params:[{name:"Weather Conditions",value:"CLEAR",select:{type:"point",fields:["WEATHER_CONDITION"]},bind:{input:"select",options:["UNKNOWN","CLEAR","RAIN","CLOUDY/OVERCAST","BLOWING SAND, SOIL, DIRT","BLOWING SNOW","FOG/SMOKE/HAZE","FREEZING RAIN/DRIZZLE","OTHER","SLEET/HAIL","SNOW"]}}],mark:"circle",encoding:{x:{field:"Month",type:"quantitative",axis:{title:"Months of 2019"}},y:{field:"INJURIES_TOTAL",type:"quantitative",scale:{domain:[0,15]},axis:{tickCount:13,title:"Total Injuries"}},size:{value:300},color:{condition:{param:"Weather Conditions",value:"rgba(220, 0, 0, 0.18)"},value:"transparent"}}},{data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv"},width:400,height:400,params:[{name:"Weather Conditions",value:"CLEAR",select:{type:"point",fields:["WEATHER_CONDITION"]},bind:{input:"select",options:["UNKNOWN","CLEAR","RAIN","CLOUDY/OVERCAST","BLOWING SAND, SOIL, DIRT","BLOWING SNOW","FOG/SMOKE/HAZE","FREEZING RAIN/DRIZZLE","OTHER","SLEET/HAIL","SNOW"]}}],mark:"circle",encoding:{x:{field:"Month",type:"quantitative",axis:{title:"Months of 2022"}},y:{field:"INJURIES_TOTAL",type:"quantitative",scale:{domain:[0,15]},axis:{tickCount:13,title:"Total Injuries"}},size:{value:300},color:{condition:{param:"Weather Conditions",value:"rgba(220, 0, 0, 0.18)"},value:"transparent"}}}],config:{}}})]})]}),A=a(9209),R=a.n(A),O=()=>(0,i.jsx)("div",{className:R().container,children:(0,i.jsxs)("div",{className:R().heatmapContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:R().text,children:"Heatmap of Crashes by Day of the Week and Hour of the Day"}),(0,i.jsx)("p",{className:R().subText,children:"A heatmap to analyze the frequency of crashes by day of the week and hour of the day, which can provide insights into when crashes are most likely to occur."})]}),(0,i.jsxs)("div",{className:R().viz,children:[(0,i.jsx)(C.Z,{spec:{title:"2019",data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv"},mark:"rect",encoding:{x:{field:"CRASH_HOUR",type:"quantitative",axis:{title:"Hour of the Day",labelExpr:"datum.value + ':00'"}},y:{field:"CRASH_DAY_OF_WEEK",type:"ordinal",axis:{title:"Day of the Week"}},color:{aggregate:"count",type:"quantitative",scale:{scheme:"greenblue"},title:"Number of Crashes"},tooltip:[{field:"CRASH_HOUR",type:"quantitative",title:"Hour"},{field:"CRASH_DAY_OF_WEEK",type:"ordinal",title:"Day of Week"},{aggregate:"count",title:"Number of Crashes"}]},width:375,height:300,config:{background:"#FCF0E1"}}}),(0,i.jsx)(C.Z,{spec:{title:"2022",data:{url:"https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv"},mark:"rect",encoding:{x:{field:"CRASH_HOUR",type:"quantitative",axis:{title:"Hour of the Day",labelExpr:"datum.value + ':00'"}},y:{field:"CRASH_DAY_OF_WEEK",type:"ordinal",axis:{title:"Day of the Week"}},color:{aggregate:"count",type:"quantitative",scale:{scheme:"greenblue"},title:"Number of Crashes"},tooltip:[{field:"CRASH_HOUR",type:"quantitative",title:"Hour"},{field:"CRASH_DAY_OF_WEEK",type:"ordinal",title:"Day of Week"},{aggregate:"count",title:"Number of Crashes"}]},width:375,height:300,config:{background:"#FCF0E1"}}})]})]})}),z=a(3744),k=a.n(z),F=()=>(0,i.jsxs)("div",{className:k().container,children:[(0,i.jsx)("h1",{children:"A Comparative Analysis"}),(0,i.jsx)(T,{}),(0,i.jsx)(N,{}),(0,i.jsx)(w,{}),(0,i.jsx)(O,{})]});function H(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{}),(0,i.jsx)(_,{}),(0,i.jsx)(F,{}),(0,i.jsx)(d,{})]})}},4724:function(e){e.exports={injuriesContainer:"ChrisViz_injuriesContainer__rLKPU",viz:"ChrisViz_viz__jRYgT",causesContainer:"ChrisViz_causesContainer__0KOQh",text:"ChrisViz_text__eOb_g",subText:"ChrisViz_subText__ChnpW"}},3744:function(e){e.exports={container:"ComparativeAnalysis_container__ZkIhV",injuriesContainer:"ComparativeAnalysis_injuriesContainer__JYLDO",causesContainer:"ComparativeAnalysis_causesContainer__Z0yUv",text:"ComparativeAnalysis_text__egqqH",subText:"ComparativeAnalysis_subText__eCMZT"}},7552:function(e){e.exports={container:"DivyaViz_container__Av8IB",speedLimitContainer:"DivyaViz_speedLimitContainer___X6q7",text:"DivyaViz_text__SPrOw",subText:"DivyaViz_subText__3nrHn"}},565:function(e){e.exports={container:"FilteredAnalysis_container__Gg0Og",mapContainer:"FilteredAnalysis_mapContainer__HAqpb",content:"FilteredAnalysis_content__OiEik",text:"FilteredAnalysis_text__bBH6L",emphasizedText:"FilteredAnalysis_emphasizedText__IMKy3",subText:"FilteredAnalysis_subText__0kF_M",hitAndRunText:"FilteredAnalysis_hitAndRunText__iT32i",radarContainer:"FilteredAnalysis_radarContainer__JkXn1",select:"FilteredAnalysis_select__xDeJg"}},4833:function(e){e.exports={hero:"Hero_hero__XKL82",video:"Hero_video__2VFlH",overlay:"Hero_overlay__1T_hF",text:"Hero_text__Jl26l",subText:"Hero_subText__jLnEl"}},2892:function(e){e.exports={container:"Introduction_container__j_Ezs",topSection:"Introduction_topSection__qlo5_",image:"Introduction_image__B7YtZ",text:"Introduction_text__Crxq5"}},5004:function(e){e.exports={container:"JeffViz_container__3IO5j",hourContainer:"JeffViz_hourContainer__7Pmpy",text:"JeffViz_text__zYUS1",subText:"JeffViz_subText__8IYQF"}},9209:function(e){e.exports={container:"SherryViz_container__1qpzC",heatmapContainer:"SherryViz_heatmapContainer__dOqM2",viz:"SherryViz_viz__nHPaj",text:"SherryViz_text__PH1hY",subText:"SherryViz_subText__H4sOT"}}},function(e){e.O(0,[519,971,472,744],function(){return e(e.s=1884)}),_N_E=e.O()}]);