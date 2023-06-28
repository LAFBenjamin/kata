import {describe,expect,test } from 'vitest'
import { pricer } from './pricer';

describe("Pricer tests", ()=> {
    test("1 article à 1 € et taxe 0 % → “1.00 € ", ()=> {
        expect(pricer( {
            itemPrice :1,
            quantity:1,
            tax:0})).toEqual("1.00 €");
    })

    test("1 article à 2.00 € et taxe 0 % → “2.00 € ", ()=> {
        expect(pricer( {
            itemPrice :2,
            quantity:1,
            tax:0})).toEqual("2.00 €");
    })


    test("2 articles à 2.00 € et taxe 0 % → “4.00 € ", ()=> {
        expect(pricer( {
            itemPrice :2,
            quantity:2,
            tax:0})).toEqual("4.00 €");
    })

    test("3 articles à 1,21 € et taxe 0 % → “3.63 €” ", ()=> {
        expect(pricer( {
            itemPrice :1.21,
            quantity:3,
            tax:0})).toEqual("3.63 €");
    })

    test("3 articles à 1,21 € et taxe 5 % → “3.81 €”” ", ()=> {
        expect(pricer( {
            itemPrice :1.21,
            quantity:3,
            tax:5})).toEqual("3.81 €");
    })

    test("3 articles à 1,21 € et taxe 20 % → “4.36 €” ", ()=> {
        expect(pricer( {
            itemPrice :1.21,
            quantity:3,
            tax:20})).toEqual("4.36 €");
    })

    test("3 articles à 1,21 € et taxe 20 % → “4.36 €” ", ()=> {
        expect(pricer( {
            itemPrice :1.21,
            quantity:3,
            tax:20})).toEqual("4.36 €");
    })

    test("5 articles à 345,00 € et taxe 10 % avec une reduction→ “1840.58 €” ", ()=> {
        expect(pricer( {
            itemPrice :345.00,
            quantity:5,
            tax:10})).toEqual("1840.58 €");
    })

    test("5 articles à 1299,00 € et taxe 10 % avec une reduction→ 6787.27 €” ", ()=> {
        expect(pricer( {
            itemPrice :1299.00,
            quantity:5,
            tax:10})).toEqual("6787.27 €");
    })
})