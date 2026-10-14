(function(){
  const s=window.SLTSC;
  const img=(key,alt)=>photo(key);
  s.community={
    pillars:[
      {title:'Find your people',text:'A welcoming place to ask, share, and keep learning between classes.',image:img('students3')},
      {title:'Practise in public',text:'Bring a small build, a lab question, or a new idea to the conversation.',image:img('online_class3')},
      {title:'Make the next move',text:'Events and peer moments designed to turn momentum into a clear next step.',image:img('events1')}
    ],
    stories:[{name:'Demo learner story',role:'Career switcher · Demo info',quote:'A place to learn alongside other people, not just watch from the sidelines.',image:img('graduation1')},{name:'Demo learner story',role:'Foundation learner · Demo info',quote:'The community layer makes every question feel like part of the process.',image:img('students4')}],
    gallery:[img('students5'),img('online_class4'),img('events2'),img('coding5'),img('instructor2'),img('graduation2')]
  };
})();
