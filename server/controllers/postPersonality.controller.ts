import { Request, Response } from "express"
import {Heap} from 'heap-js';

export const postPersonality = async (req: Request, res: Response) => {

    const data = req.query

    const priorityComparator = (a: any,b: any) => deviation(a,data) - deviation(b, data)
    var customHeap = new Heap(priorityComparator)

    var book3 = [0,1,0,1,2, {'name': 'book3'}]
    var book2 = [10,11,12,11,12, {'name': 'book2'}]
    var book1 = [20,23,24,21,20, {'name': 'book1'}]

    customHeap.init([book1, book2, book3])
    console.log(customHeap.pop())
    console.log(customHeap.pop())
    console.log(customHeap.pop())

    res.status(201).json({ranking: "OK"})
}

const personalityArray = ['extraversion', 'agreeableness', 'openness', 'neuroticism', 'conscientiousness'];

const deviation = (arr: any , data: any) => {
    let res = 0;
    for (let i = 0; i < arr.length - 1; i ++) {
        res = res + (arr[i] - data[personalityArray[i]])**2
    }
    return res/(arr.length - 1)
}