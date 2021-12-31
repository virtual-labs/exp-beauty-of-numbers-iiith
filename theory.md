**Problem 1**  

P is divisor of Q, if dividing Q by P does not leave any remainder. A number, N, is called a perfect number, if the sum of all such divisors of N(not including N) is equal to N. 6 is the smallest perfect number. It's factors are 1,2,3 and their sum is 1+2+3=6. So, to check whether a number, say N, is perfect or not, it is required to find all the divisors of that number. The easiest way to do this is to check every number form 2 to N-1 if it is dividing N completely or not, and take the sum of all the divisor. While this may work well for small numbers, it would be very time consuming for large numbers.  

A better solutin can be built by observing that many numbers can easily be ruled out as not divisors. For instance, all the numbers between N/2 and N cannot be divisors. Similarly, all numbers between N/2 and N/3 cannot be divisors of N, and so on. So, at each step we can check two numbers to be divisors of N and at the same time we can eliminate a fraction of the numbers less than N as not divisors and putting an upper bound on the next biggest possible divisor. Lets apply this tactic to find the divisors of 60.  

60 divided by 2 gives 30 as the quotient and 0 as the remainder. So, 2 and 30 are divisors and there are no other divisors greater than 30. SUM=32+1=33  
60 divided by 3 gives 20 as the quotient and 0 as the remainder. So, 3 and 20 are divisors and there are no other divisors greater than 20. SUM=33+23=46  
60 divided by 4 gives 15 as the quotient and 0 as the remainder. So, 4 and 15 are divisors and there are no other divisors greater than 15. SUM=46+19=65  
60 divided by 5 gives 12 as the quotient and 0 as the remainder. So, 5 and 12 are divisors and there are no other divisors greater than 12. SUM=65+17=82  
60 divided by 6 gives 10 as the quotient and 0 as the remainder. So, 6 and 10 are divisors and there are no other divisors greater than 10. SUM=82+16=98  
60 divided by 7 gives 8 as the quotient and 4 as the remainder. So, 7 is not a divisor and there are no other divisors greater than or equal to 8.     

Now, we see that there is no need to see any more divisors. The divisors of 60 are 2,30,3,20,4,15,5,12,6 and 10. And their sum is 97. So, 60 is not a perfect number. Lets try this procedure on 28 which is the next prefect number after 6.  

28 divided by 2 gives 14 as the quotient and 0 as the remainder. So, 2 and 14 are divisors and there are no other divisors greater than 14. SUM=1+16=17  
28 divided by 3 gives 9 as the quotient and 2 as the remainder. So, 3 is not a divisor and there are no other divisors greater than or equal to 9. SUM=17  
28 divided by 4 gives 7 as the quotient and 0 as the remainder. So, 4 and 7 are divisors and there are no other divisors greater than 7. SUM=17+11=28  
28 divided by 5 gives 5 as the quotient and 3 as the remainder. So, 5 is not a divisor and there are no other divisors greater than 5. SUM=28  

We need not check any more numbers. The SUM is 28, and hence, 28 is a perfect number.  

**Problem 2**

Consider the fraction A/B. We use two variables A,B to represent a fraction. Lets see how can we solve the problem. A/B = q + 1/E. How can we find q,E given A,B such that E&gt1.; From math basics any fraction can be expressed A/B = step(A/B) + frac(A/B). frac(A/B)< 1 so 1/frac(A/B) > 1. Thus we shall choose q as step(A/B) and E as 1/frac(A/B). Now we shall see programatically how can we represent and E as we need to do the same operation on E. Obviosuly from the above equatio
n E = B/(A-B*q) which means E is also a fraction. Thus we express E in terms of some (x,y) where x = B and y = A-B*q and do the same operation as we have done on (A,B). It is recommended to use while loop and handle the termination case properly while coding.
