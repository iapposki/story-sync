import { Request, Response } from "express"
import {Heap} from 'heap-js';

export const postPersonality = async (req: Request, res: Response) => {

    const data = req.query

    const priorityComparator = (a: any,b: any) => deviation(a,data) - deviation(b, data)
    var customHeap = new Heap(priorityComparator)


    const books = [
        [-0.17, -0.15, 0.28, 0.20, 0.18, {name: "American Psycho by Bret Easton Ellis"}],
        [0.13, 0.20, -0.11, -0.20, -0.16, {name: "Kindred by Octavia E. Butler"}],
        [-0.17, -0.17, -0.26, -0.24, -0.16, {name: "The Name of the Rose by Umberto Eco"}],
        [-0.15, -0.12, -0.17, -0.16, -0.11, {name: "Dark Matter by Blake Crouch"}],
        [0.17, 0.20, 0.25, 0.25, 0.21, {name: "The Diary of Anne Frank by Anne Frank"}],
        [0.13, 0.12, 0.14, 0.15, 0.18, {name: "The Color Purple by Alice Walker"}]
      ];
    var result: any;
    customHeap.init([books[0]]);
    for (let i = 1; i < books.length; i++) {
        customHeap.push(books[i])
    }
    result = customHeap.pop()[personalityArray.length]['name']

    res.status(201).json(result)
}

const personalityArray = ['extraversion', 'agreeableness', 'openness', 'neuroticism', 'conscientiousness'];

const deviation = (arr: any , data: any) => {
    let res = 0;
    for (let i = 0; i < arr.length - 1; i ++) {
        res = res + (arr[i] - data[personalityArray[i]])**2
    }
    return res/(arr.length - 1)
}