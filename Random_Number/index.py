#Do not Repeat Yourself
import random


max_trials = 5
guess_num = random.randint(1,5) #the guess number
print(f"The computer guessed {guess_num}") #to check what the random number is
print(f"Welcome to the guessing game. Guess a number between 1 and 2 \nYou have {max_trials} trial(s)")

#The function should ask the user to guess a number btwn 1 and 10.
#It should give the user a number of trials and exit if the user fails to guess right by the last try
def guesses():
    try:
        global max_trials

        for i in range(0,max_trials):
                guessed_value = int(input())
                if guessed_value == guess_num:
                    print("Congratulations! You got!!")
                    break
                elif max_trials == 1:
                    print("We got to the last try. Run my code again, let's have some fun!")
                    break
                else:
                    max_trials -= 1
                    print(f"Sorry, try again. Trials left ({max_trials})")
    except ValueError:
            print("That didn't seem to be an integer. Try again")
            guesses()

guesses()


