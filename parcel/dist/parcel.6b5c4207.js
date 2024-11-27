(function () {function b(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}var p=6e4;function A(a){return a.getTime()%p}function B(a){var $=new Date(a.getTime()),e=Math.ceil($.getTimezoneOffset());$.setSeconds(0,0);var t=e>0?(p+A($))%p:A($);return e*p+t}function w(e,t){h(2,arguments);var r=b(e),$=b(t),d=r.getTime()-$.getTime();return d<0?-1:d>0?1:d}function D(e,r){h(2,arguments);var t=b(e),$=b(r);return 12*(t.getFullYear()-$.getFullYear())+(t.getMonth()-$.getMonth())}function E(e,r){h(2,arguments);var $=b(e),t=b(r);return $.getTime()-t.getTime()}function F(e,t){h(2,arguments);var r=b(e),$=b(t),d=w(r,$),a=Math.abs(D(r,$));r.setMonth(r.getMonth()-d*a);var x=d*(a-(w(r,$)===-d));return 0===x?0:x}function G(e,r){h(2,arguments);var $=E(e,r)/1e3;return $>0?Math.floor($):Math.ceil($)}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function H(o,e,t){var a;return t=t||{},a="string"==typeof q[o]?q[o]:1===e?q[o].one:q[o].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"in "+a:a+" ago":a}function y(t){return function(r){var e=r||{},$=e.width?String(e.width):t.defaultWidth;return t.formats[$]||t.formats[t.defaultWidth]}}var I={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},J={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},K={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},L={date:y({formats:I,defaultWidth:"full"}),time:y({formats:J,defaultWidth:"full"}),dateTime:y({formats:K,defaultWidth:"full"})};var O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function P(e,t,a,o){return O[e]}function j(t){return function(a,e){var r,n=e||{};if("formatting"===(n.context?String(n.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,l=n.width?String(n.width):i;r=t.formattingValues[l]||t.formattingValues[i]}else{var u=t.defaultWidth,d=n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(a):a]}}var Q={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},R={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},S={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},T={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},U={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},V={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function W(n,e){var a=Number(n),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"}var X={ordinalNumber:W,era:j({values:Q,defaultWidth:"wide"}),quarter:j({values:R,defaultWidth:"wide",argumentCallback:function(n){return Number(n)-1}}),month:j({values:S,defaultWidth:"wide"}),day:j({values:T,defaultWidth:"wide"}),dayPeriod:j({values:U,defaultWidth:"wide",formattingValues:V,defaultFormattingWidth:"wide"})};function Y(a){return function(t,e){var l=String(t),r=e||{},u=l.match(a.matchPattern);if(!u)return null;var n=u[0],v=l.match(a.parsePattern);if(!v)return null;var c=a.valueCallback?a.valueCallback(v[0]):v[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:l.slice(n.length)}}}function k(t){return function(r,e){var a=String(r),n=e||{},l=n.width,u=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],$=a.match(u);if(!$)return null;var f,i=$[0],c=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(c)?_(c,function(t){return t.test(i)}):Z(c,function(t){return t.test(i)}),f=t.valueCallback?t.valueCallback(f):f,{value:f=n.valueCallback?n.valueCallback(f):f,rest:a.slice(i.length)}}}function Z(t,r){for(var e in t)if(t.hasOwnProperty(e)&&r(t[e]))return e}function _(t,r){for(var e=0;e<t.length;e++)if(r(t[e]))return e}var aa=/^(\d+)(th|st|nd|rd)?/i,ba=/\d+/i,ca={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},da={any:[/^b/i,/^(a|c)/i]},ea={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fa={any:[/1/i,/2/i,/3/i,/4/i]},ga={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ha={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ia={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ja={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ka={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},la={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ma={ordinalNumber:Y({matchPattern:aa,parsePattern:ba,valueCallback:function(a){return parseInt(a,10)}}),era:k({matchPatterns:ca,defaultMatchWidth:"wide",parsePatterns:da,defaultParseWidth:"any"}),quarter:k({matchPatterns:ea,defaultMatchWidth:"wide",parsePatterns:fa,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:k({matchPatterns:ga,defaultMatchWidth:"wide",parsePatterns:ha,defaultParseWidth:"any"}),day:k({matchPatterns:ia,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:ka,defaultMatchWidth:"any",parsePatterns:la,defaultParseWidth:"any"})};var na={code:"en-US",formatDistance:H,formatLong:L,formatRelative:P,localize:X,match:ma,options:{weekStartsOn:0,firstWeekContainsDate:1}};function oa($){return pa({},$)}function pa(r,e){if(null==r)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e=e||{})e.hasOwnProperty(t)&&(r[t]=e[t]);return r}var C=1440,qa=2520,z=43200,ra=86400;function sa(e,r,a){h(2,arguments);var t=a||{},s=t.locale||na;if(!s.formatDistance)throw new RangeError("locale must contain formatDistance property");var n=w(e,r);if(isNaN(n))throw new RangeError("Invalid time value");var $,i,o=oa(t);o.addSuffix=Boolean(t.addSuffix),o.comparison=n,n>0?($=b(r),i=b(e)):($=b(e),i=b(r));var N,c=G(i,$),f=(B(i)-B($))/1e3,u=Math.round((c-f)/60);if(u<2)return t.includeSeconds?c<5?s.formatDistance("lessThanXSeconds",5,o):c<10?s.formatDistance("lessThanXSeconds",10,o):c<20?s.formatDistance("lessThanXSeconds",20,o):c<40?s.formatDistance("halfAMinute",null,o):c<60?s.formatDistance("lessThanXMinutes",1,o):s.formatDistance("xMinutes",1,o):0===u?s.formatDistance("lessThanXMinutes",1,o):s.formatDistance("xMinutes",u,o);if(u<45)return s.formatDistance("xMinutes",u,o);if(u<90)return s.formatDistance("aboutXHours",1,o);if(u<C){var l=Math.round(u/60);return s.formatDistance("aboutXHours",l,o)}if(u<qa)return s.formatDistance("xDays",1,o);if(u<z){var g=Math.round(u/C);return s.formatDistance("xDays",g,o)}if(u<ra)return N=Math.round(u/z),s.formatDistance("aboutXMonths",N,o);if((N=F(i,$))<12){var m=Math.round(u/z);return s.formatDistance("xMonths",m,o)}var d=N%12,M=Math.floor(N/12);return d<3?s.formatDistance("aboutXYears",M,o):d<9?s.formatDistance("overXYears",M,o):s.formatDistance("almostXYears",M+1,o)}function ta(e,r){return h(1,arguments),sa(e,Date.now(),r)}var ua="1996-09-13 10:00:00";document.body.textContent="".concat(ta(new Date(ua))," ago");})();