const question=[
    {
    text:"What's your ideal way to spend today?",
    options:[
        {
            text:"Cry watching a kdrama scenes",mood:"sad"
        },
        {
            text:"Staring at the ceiling ,thinking about life", mood:"heartbroken"
        },
        {
            text:"Dancing to k-pop and laughing ", mood:"happy"
        },
        {
            text:"Message my crush and regret it", mood:"romantic"
        }
    ]    
},
{
text:"What's your current love life like?",
options:[
    {
        text:"Just had a breakup, avoiding all romance",mood:"sad"
    },
    {
        text:"I still check their profile at 3 AM", mood:"heartbroken"
    },
     {
        text:"I am happy being single and stress free", mood:"happy"
     },
     {
        text:"Crushing silently they don't know yet", mood:"romantic"
     }
]
},
{
text:"Which kdrama character do you feel like today?",
options:[
    {
        text:"Kim Shin(Goblin)-Dramatic and Deep",mood:"sad" 
    },
    {
        text:"Han Ji-pyeong(Start-up)", mood:"heartbroken"
    },
    {
    text:"Bok-joo(Weightlifting Fairy)",mood:"happy"
    },
    {
        text:"Yoo Yeon-seok(hospital Playlist)",mood:"romantic"
    }
]
},
{
    text:"What's your favourite kdrama genere?",
    options:[
        {
            text:"Melodrama---I love emotional rollercoasters", mood:"sad"
        },
        {
            text:"Tragedy---I like to cry and reflect",mood:"heartbroken"
        },
        {
            text:"Slice of Life---Chill and relatable",mood:"happy"
        },
        {
            text:"Romance---Give me butterflies!",mood:"romantic"
        }
    ]
},
{
    text:"If your life was a K-drama, what would today's episode be called?",
    options:[
        {
            text:"The Umbrella I left Behind", mood:"sad"
        },
        {
            text:"I Miss You, But I Won't Say  It",mood:"heartbroken"
        },
        {
            text:"A Day Full of Dumplings & Dreams",mood:"happy"
        },
        {
            text:"The Smile I Showed You",mood:"romantic"
        }
    ]
}
];

const quotes={
    sad:{
        quote:"Some things are beautiful because you can't have them",
        source:"---Goblin"
    },
    heartbroken:{
        quote:"People who have nothing to lose ..become suprisingly brazen ",
        source:"---Happiness"
    },
    happy:{
        quote:"You're already perfect..You're the one who doesn't know that ",
        source:"---At A Distance, Spring Is Green"
    },
    romantic:{
        quote:"You were never just a passing moment--you were the whole chapter I didn't know I needed",
        source:"---When Life Gives You Tangerines"
    }
};

let currentquestion=0;
let moodcount={
    sad:0,
    heartbroken:0,
    happy:0,
    romantic:0
};
function showquestion(){
    const quizbox=document.getElementById("quiz");
    quizbox.innerHTML="";

    if(currentquestion>=question.length)
    {
        showresult();
        return;
    }

    const q=question[currentquestion];
    const questionbox=document.createElement("div");
    questionbox.classList.add("question");
    questionbox.innerHTML=`<h4>${q.text}</h4>`;

    const optionbox=document.createElement("div");
    optionbox.classList.add("options");

    q.options.forEach(opt=>{
        const btn=document.createElement("button");
        btn.innerText=opt.text;
        btn.onclick=()=>{
            moodcount[opt.mood]++;+
            currentquestion++;
            showquestion();
        };
        optionbox.appendChild(btn);
    });

    questionbox.appendChild(optionbox);
        quizbox.appendChild(questionbox);
    
}

function showresult(){
    const resultbox=document.getElementById("resultbox");
    const quizbox=document.getElementById("quiz");
    quizbox.style.display="none";
    resultbox.style.display="block";

    const mood= Object.entries(moodcount).reduce((a,b)=>a[1]>b[1]?a:b)[0];
     document.getElementById("quotetext").innerText=quotes[mood].quote;
     document.getElementById("quotesource").innerText=quotes[mood].source;

}
function restartquiz(){
    currentquestion=0;
    moodcount={
        sad:0,
        heartbroken:0,
        happy:0,
        romantic:0
};
document.getElementById("quiz").style.display="block";
document.getElementById("resultbox").style.display="none";
showquestion();
}
showquestion();



