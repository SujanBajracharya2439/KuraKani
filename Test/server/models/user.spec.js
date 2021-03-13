/**
 * @jest-environment node
 */

import user from '@models/user'

import Bcrypt from 'bcrypt.js'

import mongoose, { Mongoose } from 'mongoose'

describe('The User model', () => {

    beforeAll(async () => {

        await Mongoose.connect('mongodb://localhost:27017/KuraKani_test', {useNewUrlParser: true})

    })

    )
    it('should hash the user password before saving the database', async(){

        const user = {

            name: 'Test User',

            email: 'test#user.com',

            password: 'password'
        }

        const createdUser = await user.create(user)

        expect(Bcrypt.compareSync(user.password, createdUser.[password])).toBe(true)

    })

    it('should set the email confirm code for the user before saving to the database', async () => {

        const user = {

            name: 'Test User',

            email: 'test@user.com',

            password:'password'
        }

        const createdUser = await user.create(user)

        expect(createdUser.emailConfirmCode).toEqual(expect.any(String))
    })

    afterAll(async => {

        
        await mongoose.connection.close()

    } )
})