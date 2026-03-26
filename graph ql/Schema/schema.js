const graphql = require('graphql');
const {GraphQLObjectType,GraphQLSchema, GraphQLString,GraphQLList} = graphql;

const UserCollection = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const jwtSecret = 'abc@123'


const UserType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
        bio:{type:GraphQLString},
        address:{type:GraphQLString},
    })
})

const authType = new GraphQLObjectType({
    name:"Auth",
    fields:{
        token:{type:GraphQLString},
        user:{type:UserType}
    }
})

const Mutation = new GraphQLObjectType({
        name:'Mutation',
        fields:{
            register:{
                type:GraphQLString, // return data type(which type of data your are returning in resolver mention its type here)
                args:{
                    name:{type:GraphQLString},
                    email:{type:GraphQLString},
                    password:{type:GraphQLString},
                },
                async resolve(parent ,args, context){
                const {name, email, password} = args;

                let existingUser = await UserCollection.findOne({email});

                if(existingUser){
                    return 'user already registered'
                }
                else{
                    let hash = await bcrypt.hash(password, 10);
                    await UserCollection.create({name, email, password:hash});
                    return 'user registered successfully'
                }
            }
            },

            loginUser:{
                type:authType,
                args:{
                    email:{type:GraphQLString},
                    password:{type:GraphQLString},
                },
                async resolve(parent, args){
                    const {email, password} = args;
                    let checkUser = await UserCollection.findOne({email});
                    if(!checkUser){
                        throw new Error('user not found')
                    }
                    else{
                        const checkpassword = await bcrypt.compare(password, checkUser.password);

                        if(checkpassword){
                            let token = await jwt.sign({id:checkUser._id} , jwtSecret);

                            return {token , user:checkUser}
                        }
                        else{
                            throw new Error('user not found')
                        }
                    }
                }
            },

           
            
        }
})

const Query = new GraphQLObjectType({
        name:'RootQuery',
        fields:{
            home:{
                type:GraphQLString,
                resolve(parent ,args, context){
                    return 'welcome home'
                }
            }

        }
})

module.exports = new GraphQLSchema({
    mutation:Mutation,
    query:Query
})

