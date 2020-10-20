#!/bin/python3

import math
import os
import random
import re
import sys


class Car:
    def __init__(self, speed, speed_unit):
        self.speed = speed
        self.speed_unit = speed_unit

    def __str__(self):
        return "Car with the maximum speed of %d %s" % (self.speed, self.speed_unit)

class Boat:
    def __init__(self, max_speed):
        self.max_speed = max_speed
        # self.speed_unit = "knots"

    def __str__(self):
        return "Boat with the maximum speed of %d knots" % self.max_speed


#
# Complete the 'reverse_words_order_and_swap_cases' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING sentence as parameter.
#

def reverse_words_order_and_swap_cases(sentence):
    # Write your code here
    reversed_sentence = list(reverse_word_order(sentence))
    for i in range(len(reversed_sentence)):
        if reversed_sentence[i].isupper():
            reversed_sentence[i] = reversed_sentence[i].lower()
        else:
            reversed_sentence[i] = reversed_sentence[i].upper()
    
    final_res = ''
    reversed_sentence = ''.join(reversed_sentence)
    while reversed_sentence.find(" ") > -1:
        space = reversed_sentence.find(" ")
        # print("space ", space, reversed_sentence[ :space])
        # print(final_res)
        final_res += reverse_word_order(reversed_sentence[ :space]) + " "
        reversed_sentence = reversed_sentence[space + 1: ]
        
    final_res += reverse_word_order(reversed_sentence) + " "

    return final_res

def reverse_word_order(word):
    s = list(word)
    head = 0
    tail = len(word) - 1

    while(head < tail):
        (s[head], s[tail]) = (s[tail], s[head])
        head += 1
        tail -= 1

    return ''.join(s)

if __name__ == '__main__':
    print(reverse_words_order_and_swap_cases("aWESOME is cODING"))
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    q = int(input())
    queries = []
    for _ in range(q):
        args = input().split()
        vehicle_type, params = args[0], args[1:]
        if vehicle_type == "car":
            max_speed, speed_unit = int(params[0]), params[1]
            vehicle = Car(max_speed, speed_unit)
        elif vehicle_type == "boat":
            max_speed = int(params[0])
            vehicle = Boat(max_speed)
        else:
            raise ValueError("invalid vehicle type")
        fptr.write("%s\n" % vehicle)
    fptr.close()
