(function (root) {
  'use strict';
  const members = ['Zhyar','Akam','Bria','Yasr','Nma','Layad','Snur','Soma'].map((name,i)=>({id:name.toLowerCase(),name,color:['#27604c','#747049','#946353','#527689','#87627f','#54764b','#89722f','#68698b'][i]}));
  const sections = [
    {id:'site',name:'Site & neighborhood',short:'Site analysis',number:'01',description:'Read the everyday fabric of Shari Mamostayan.',count:15},
    {id:'mixed',name:'Mixed land use',short:'Mixed land use',number:'02',description:'How well do homes, work and daily life come together?',count:10},
    {id:'compact',name:'Compact building design',short:'Compact design',number:'03',description:'Explore density, human scale and shared open space.',count:10}
  ];
  const yesno=['Yes','No'];
  const raw=[
    ['site',1,'Mixed-use presence','Does mixed-use exist? (yes - no)','choice',yesno,1],
    ['site',2,'Type of mixed-use','What type of mixed-use is it? (Vertical, horizontal, live-work, transit-oriented, urban renewal & revitalization, destination, retail-residential, waterfront)','multi',['Vertical','Horizontal','Live-work','Transit-oriented','Urban renewal & revitalization','Destination','Retail-residential','Waterfront'],1],
    ['site',3,'Uses within the mix','Which uses are mixed? (Residential, commercial, recreational, retail, educational, industrial...)','multi',['Residential','Commercial','Recreational','Retail','Educational','Industrial','Other'],1],
    ['site',4,'Access to everyday uses','These uses are accessible by what? (foot, bike, car, bus)','multi',['Foot','Bike','Car','Bus'],1],
    ['site',5,'Rent & property values','Common (house rentals) and (shop rentals) Rate? (Property values in general: …)','rent',[],1],
    ['site',6,'Environmental quality','Environment quality (air, soil, tree…) and the causes?','text',[],1],
    ['site',7,'Solid-to-void ratio','Solid to void ratio (approximately)? (solid %…, void %…)','ratio',[],1],
    ['site',8,'Walking distance to services','Maximum walking distance from services?','distance',[],1],
    ['site',9,'Congestion locations','Congestion locations in the neighborhood?','text',[],1],
    ['site',10,'Development-code changes','Any changes in Development Codes in the past 5 years?','text',[],1],
    ['site',11,'Overlay zoning','Any applications of Overlay Zoning? (yes – no), How?','choice',yesno,1],
    ['site',12,'Greyfields','Any Greyfield? (yes – no), where in the neighborhood?','choice',yesno,1],
    ['site',13,'Greenfields','Any Greenfields? (yes – no), where in the neighborhood?','choice',yesno,1],
    ['site',14,'Vacant areas','Any vacant areas? (yes – no), where in the neighborhood?','choice',yesno,2],
    ['site',15,'Pedestrian conditions','Pedestrian condition?','text',[],2],
    ['mixed',1,'Funding to live near work','Any state funds? (to support people to live where they work)','choice',yesno,2],
    ['mixed',2,'Smart growth codes','(Smart growth codes) VS (conventional development codes) adoption?','choice',['Smart growth codes','Conventional codes','Both','Neither'],2],
    ['mixed',3,'Tools for smart growth','Any innovative tools that encourage Smart Growth? (Overlay Zoning, PUDs...)','text',[],2],
    ['mixed',4,'Financing mixed-use projects','Any facilitation for financing mixed-use properties? (mixed-use infill projects or mixed-use greenfield projects)','choice',yesno,2],
    ['mixed',5,'Basis of zoning','The zoning relies on Type of Uses, or Building Type?','choice',['Type of uses','Building type','Both','Neither'],2],
    ['mixed',6,'Flex zoning','Any applications of Flex Zoning?','choice',yesno,3],
    ['mixed',7,'Declining commercial areas','Any existence of declining (shopping malls) or (strip commercial streets) to be converted into mixed-use development?','choice',yesno,3],
    ['mixed',8,'Scale of mixed-use','Is mixed-use at an appropriate scale in the neighborhood?','choice',yesno,3],
    ['mixed',9,'Conversion to walkable mixed-use','Any examples of single-use commercial or retail development profited into walkable mixed-use? (any declining retails to take advantage from?)','text',[],3],
    ['mixed',10,'Jobs–housing balance','Is the community rewarded for balancing between jobs and housing? (or any chance to be rewarded up on that balance?)','text',[],3],
    ['compact',1,'Public education about density','Any Public Meetings or Education towards citizens about Density or Compact Building?','choice',yesno,3],
    ['compact',2,'Access to open space','Is ready access to open spaces provided?','choice',yesno,3],
    ['compact',3,'Parking availability','On-Street parking or Off-Street parking available?','multi',['On-street parking','Off-street parking','Neither'],4],
    ['compact',4,'Building scale & street type','Is Building Scale appropriate to Street Type?','choice',yesno,4],
    ['compact',5,'Design standards & codes','Any State-Level Design Standards or codes that encourage Compact Building? (that can be adopted by the community)','text',[],4],
    ['compact',6,'Density bonuses & FAR','Any Density Bonuses to encourage increasing floor-to-area ratio (FAR)?','choice',yesno,4],
    ['compact',7,'Privacy in homes & yards','Any Sense of Privacy through the design of homes and yards?','choice',yesno,4],
    ['compact',8,'Design review board','Any Design Review Board to ensure desirable design standards?','choice',yesno,4],
    ['compact',9,'Financial incentives','Any Financial Incentives that encourage high density development?','choice',yesno,4],
    ['compact',10,'Support for regional planning','Any supports from local community towards Regional Planning efforts?','choice',yesno,4]
  ];
  const questions=raw.map(([section,number,title,prompt,type,options,page])=>({id:`${section}-${String(number).padStart(2,'0')}`,section,number,title,prompt,type,options,page}));
  const glossary={
    'Overlay zoning':'An additional set of planning rules applied over the existing zoning for a defined area.',
    'PUD':'Planned Unit Development: an approach that can allow a coordinated mix of uses and flexible development standards.',
    'Greyfield':'Previously developed, underused property such as a declining shopping center or large parking area. It does not necessarily imply contamination.',
    'Greenfield':'Land that has not previously been developed for urban uses, such as agricultural or open land.',
    'FAR':'Floor area ratio: total counted floor area divided by the site area. Check the local definition of counted floor area.',
    'Flex zoning':'Zoning with flexibility in uses or development standards under specified conditions.',
    'Solid / void':'For this study, record your definition and boundary: for example, building footprints versus unbuilt ground area.',
    'Infill':'Development on vacant or underused sites within an already developed area.'
  };
  root.UG_DATA={members,sections,questions,glossary};
  if(typeof module!=='undefined')module.exports=root.UG_DATA;
})(typeof window!=='undefined'?window:globalThis);
