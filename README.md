# conservative-score

It is important for a quantification technique to avoid subjectivity. For example, suppose a quiz tries to quantify how republican/conservative someone is, on the scale zero to a hundred, by asking their opinion on the Senate Amendment.


If the person votes Yes on an amendment that supports gun possession, then plus 10 points to the score. If the person votes No on an amendment that reduces minimal wages, then minus 7 points to the score.


Let’s just call 10 points and 7 points as the [weights] correspond to the amendments.


Then you might ask why those [weights]? Why does one amendment outweigh the other amendment , and why does one outweigh the other one by exactly 3 points ? Well, in most cases, the answer is simple. Because the person who designed the test chose so. Then the problem with the above quiz is that it is simply too subjective. Because your final score is entirely determined by how the quiz designer chose to assign the [weights] to each Amendment.


The premise of this quiz is to eliminate the subjectivity from the quiz designer. The dataset that empowers this quiz is the 114th congress record that has all 100 senators’ voting records on hundreds of bills/amendments. We let the data speak for itself. An unsupervised machine learning technique called PCA is applied on the dataset to extract those objective [weights]without any interference from the quiz designer. Understand this implementation, the [weights] does a great job classifying a senator as Dem or Rep. In addition to that, quantify how left-leaning a senator is, or how right-leaning a senator is.


An abstraction is, under this technique, an amendment would have a large positive [weight] if it is supported by the majority of republican senators while opposed by the majority of democrats. Vice versa, a very negative weight for the amendment, if it is opposed by the majority of republican senators while supported by the majority of democrat senators.


Reading here, some ML and Math folks might ask, why use PCA to achieve the sense of objectivity ? Why not SVM or logistic regression. Well, the problem with SVM is that it does a good job in terms of binary classification (aka, is that senator republican not ?), but it doesn’t necessarily give you a number. The problem with logistic regression...interestingly, the congress is so divided that the dataset is linearly separable, meaning that, just by examining the senator’s voting pattern, you have an 100% accuracy in predicting his affiliation. A pure logistic regression would not work on a linearly separable dataset, unless the quiz designer adds in some hyperparameter, but once again, that is subjectivity.
