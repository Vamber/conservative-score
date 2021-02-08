

var questionNumber = 0;
var ans_array = [ ];
var weight = [ 0.12667133,  0.16550022,  0.16134612,  0.20277933,  0.21677089,
        0.23794346,  0.28251727,  0.27588324,  0.27152575,  0.26362533,
       -0.2867475 , -0.27458759, -0.27692871, -0.27827472, -0.26645412,
       -0.25983466, -0.18328503, -0.05277244, -0.        ,  0.00376835];

function dot_score(){
  score = 0; 
  for (var i = 0 ; i < ans_array.length; i++){
      score += ans_array[i] * weight[i];
  }
  return score;

};

var action = ["Yes", "Abstain", "No"]
var allQuestions = [
     {
        billnum : "Senate Amendment 3489",
        question: "An individual, who is in the custody or under the effective control of an officer, or detained within a facility owned, operated, or controlled by a department or agency of the United States, in any armed conflict, shall not be subjected to any interrogation technique or approach, or any treatment related to interrogation, that is not authorized by and listed in the Army Field Manual 2-22.3. This prevents the individual from getting tortures such as mock executions, sexual humiliation, hooding prisoners and waterboarding.",
        link:  "https://www.congress.gov/congressional-record/2015/06/09/senate-section/article/S3935-1",
        }
    ,{
        billnum : "Senate Amendment 2243",
        question: "Reauthorize the Elementary and Secondary Education Act of 1965 to ensure that every child achieves;The Secretary shall establish a pilot program and award 10 grants to eligible entities to enable such eligible entities to establish and administer American Dream Accounts for a group of low-income students.From the amounts appropriated each fiscal year to carry out this part, the Secretary shall reserve not more than 5 percent of such amount to carry out the evaluation activities described earlier.",
        link:"https://www.congress.gov/congressional-record/2015/07/14/senate-section/article/S5064-1",
        }

    ,{
        billnum : "Senate Amendment 968",
        question: "The Chairman of the Committee on the Budget of the Senate may revise the allocations of a committee or committee, which may include establishing a policy of risk-sharing to require institutions of higher education to assume some of the risk for student loans by the amounts provided in such legislation for those purposes, provided that such legislation would not increase the deficit over either the period of the total of fiscal years 2016 through 2020 or the period of the total of fiscal years 2016 through 2025.",
        link : "https://www.congress.gov/congressional-record/2015/03/26/senate-section/article/S2011-2",
        }

    ,{
        billnum : "Senate Amendment 1251",
        question: "There are 12 countries in the Trans-Pacific Partnership. If at some point the President of the United States would like to add another country or two, this amendment simply says that Congress must approve; there must be a vote of the U.S. House of Representatives and a vote of the Senate in order to admit a new country.",
        link:"https://www.congress.gov/congressional-record/2015/05/18/senate-section/article/S2951-3",
        }

    ,{
        billnum : "Senate Amendment 2107",
        question: "This restores sections of the Elementary and Secondary Education Act of 1965 to restore four title VII grant programs that were removed from the Every Child Achieves Act. These initiatives will help Native American students who are too often forgotten in the debate about improving education in America. Restoring these initiatives will help students in Indian Country develop the tools they need to succeed. But this amendment could be at the expense of money for these programs can come through other programs, such as the Workforce Innovation Act.",
        link: "https://www.congress.gov/congressional-record/2015/07/08/senate-section/article/S4816-2",
        }


    ,{
        billnum : "Senate Amendment 48",
        question: "The Safe Drinking Water Act currently exempts underground injection of fracking fluids and underground storage of natural gas from regulation under the act. The Gillibrand amendment repeals those exemptions and makes underground injection of fracking fluids and underground storage of natural gas subject to those regulations.",
        link: "https://www.congress.gov/congressional-record/2015/01/27/senate-section/article/S503-2",
        }

    ,{
        billnum : "Senate Amendment 881",
        question: "It calls for a substantial increase in the minimum wage. people working full time should not be living in poverty. Since 1968, the real value of the Federal minimum wage has fallen by close to 30 percent. People all over this country and in State after State on their own have voted to raise the minimum wage. However, some senator argues it can be handled as regular legislation at any time. This budget resolution is focused on balancing the budget in 10 years. That is important in and of itself, because balancing the budget renews job growth and expands opportunity for hard-working families.",
        link: "https://www.congress.gov/congressional-record/2015/03/26/senate-section/article/S1960-5",
        }

    ,{
        billnum : "Senate Amendment 2177",
        question: "The Secretary of Labor shall--(1) allot $4,000,000,000 to provide summer and year-round employment opportunities to low-income youth; and award $1,500,000,000 in allotments and competitive grants to local entities to carry out work-based training and other work-related and educational strategies and activities of demonstrated effectiveness to unemployed, low-income young adults and low-income youth to provide the skills and assistance needed to obtain employment.",
        link: "https://www.congress.gov/congressional-record/2015/07/08/senate-section/article/S4845-1",
        }

    ,{
        billnum : "Senate Amendment 133",
        question: "Extend the production tax credits for the next 5 years to give certainty to alternative energy companies, particularly to wind energy companies. It would basically lay down the marker that this is an important part of our energy and jobs future.",
        link : "https://www.congress.gov/congressional-record/2015/01/27/senate-section/article/S503-2",
        }

    ,{
        billnum : "Senate Amendment 155",
        question: "Summary: This allows NEPA regulations to be more updated. NEPA regulations require agencies to supplement already-issued environmental impact statements when significant new circumstances or information is found to exist relating to the environmental impact of a project. The original bill would deem the final environmental impact statement issued last January to fully satisfy this NEPA requirement going ahead. This would remove the obligation from permitting agencies to supplement any environmental impact statements if significant new circumstances or information is discovered.",
        link : "https://www.congress.gov/congressional-record/2015/01/27/senate-section/article/S503-2",
        }

    ,{
        billnum : "Senate Amendment 515",
        question: "This amendment is in response to that the Department of Education intervened in State education policy to promote certain agendas over the rights of the States. This amendment specifically would create a spending-neutral reserve fund to rightly prohibit the Federal Government from taking similar actions to mandate, incent, or coerce States to adopt the common core State standards or any specific set of standards, instructional content, curriculum, assessments, or programs of instruction.",
        link : "https://www.congress.gov/congressional-record/2015/03/25/senate-section/article/S1840-2",
        }

    ,{
        billnum : "Senate Amendment 1038",
        question: "This amendment is a response to the Sanders amendment which called for a substantial increase in the minimum wage, an action that the Congressional Budget Office has told could kill up to 1 million jobs.The Kirk amendment takes a different approach. It reaffirms the ability of the individual States to raise the minimum wage above the Federal level, but only if they choose to do so at their own volition.",
        link : "https://www.congress.gov/congressional-record/2015/03/26/senate-section/article/S1960-5",
        }

    ,{
        billnum : "Senate Amendment 836",
        question: "Currently, some States have not received the proper funds from the government because they have not complied with certain EPA regulations. The senator who wrote the amendment argues these are regulations which would threaten the middle class without having a meaningful impact on the global climate, therefore the states shall receive those funds. However, one other senator concerns that this amendment would seek to undercut the President's Clean Power Plan to address climate change and reduce dangerous carbon pollution.",
        link: "https://www.congress.gov/congressional-record/2015/03/26/senate-section/article/S1960-5",
        }

    ,{
        billnum : "Senate Amendment 15",
        question: "this is an amendment to allow expedited export of liquid natural gas to WTO member countries. It would have benefits to the country in terms of jobs and economic growth as well as substantial geopolitical benefits to our allies.",
        link: "https://www.congress.gov/congressional-record/2015/01/22/senate-section/article/S372-2",
        }

    ,{
        billnum : "Senate Amendment 811",
        question: "This amendment says that Members of Congress, the President, the Vice President, their political appointees go to the exchange for their health care just like every other American does who is going to the exchange. No special rules, no special exemptions, no special subsidies.This amendment specifically does not apply to congressional staff. It is about Members of Congress, the President, the Vice President, their political appointees.",
        link : "https://www.congress.gov/congressional-record/2015/03/25/senate-section/article/S1840-2",
        }

    ,{
        billnum : "Senate Amendment 2888",
        question: "This amendment continues something that was put into the Affordable Care Act, a rise between 7.5 percent of adjusted gross income before you can begin deducting to 10 percent of adjusted gross income before you can deduct. For seniors, an exemption was provided so that seniors could stay at the 7.5 percent level. This expires next year. This amendment essentially extends this exemption for 7 years.",
        link : "https://www.congress.gov/congressional-record/2015/12/03/senate-section/article/S8326-2",
        }

    ,{
        billnum : "Senate Amendment 2162",
        question: "This amendment would clarify that parents--not the Federal Government--are the primary educators of their children. It would ensure that parents may allow their children to opt out of federally mandated tests.",
        link : "https://www.congress.gov/congressional-record/2015/07/14/senate-section/article/S5035-2",
        }

    ,{
        billnum : "Senate Amendment 2899",
        question: "This Act entails the following actions (1)Enhanced refugee security screening, such that the refugee shall register with the Department of Homeland Security as part of the enhanced screening process and be interviewed, fingerprinted plus background checked by an official of the Department of Homeland Security. (2)Additional waiting time for new visa applicants (3)tracking all incoming and leaving visitors from the United State.",
        link : "https://www.congress.gov/congressional-record/2015/12/03/senate-section/article/S8383-1",
        }

    ,{
        billnum : "Senate Amendment 632",
        question: "This policy include measures to prevent employment discrimination against pregnant workers, to provide pregnant workers with a right to workplace accommodations, and to ensure that employers comply with requirements regarding such workplace accommodations for pregnant workers, by the amounts provided in such legislation for those purposes.",
        link : "https://www.congress.gov/congressional-record/2015/03/25/senate-section/article/S1840-2",
        }

    ,{
        billnum : "Senate Amendment 29",
        question: "Express the sense of the Senate that climate change is real and not a hoax. ",
        link : "https://www.congress.gov/congressional-record/2015/01/20/senate-section/article/S260-1",
        }


    


  ];



// continue with next question or end
var start = function(questionNumber) {
      $('p1').hide().fadeIn(400);

      if(questionNumber !== allQuestions.length){
          question(questionNumber);
      }else{
          end();
      }
};

// show question and possible answers
function question(questionNum) {

      $("h1").text(allQuestions[questionNum].billnum);
      $("h2").text(allQuestions[questionNum].question);

      $.each(action, function(i, answers){
         $("#" + i).html(answers);
      });
      $("h3").text(questionNum + "/20 answered");
};

function end() {
  $("p1").hide();
  $("h3").hide();
  window.document.location = "result.html" + "?score=" + dot_score();

};





function answerCheck(userAnswer) {

     if (userAnswer === 0) {
         ans_array.push(1);
     }
     if (userAnswer === 1) {
      ans_array.push(0);
     }
     if (userAnswer === 2) {
      ans_array.push(-1);
     }
     console.log(ans_array)
     console.log()
};


$(document).ready(function() {
start(questionNumber);

$(".submit-answer").on("click", function(event) {
    var userAnswer = parseInt($(this).attr("id"));
    answerCheck(userAnswer);
    setTimeout(function() {
                $(".submit-answer")
                 start(questionNumber);
             }, 150)

     questionNumber++;
     document.getElementById("readmore").href = allQuestions[questionNumber].link;
  });

});



