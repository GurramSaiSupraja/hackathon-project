import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Company from './companySchema.js';
import Course from './courseSchema.js';
import infSchema  from './infSchema.js';
import session from 'express-session';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000"
}))


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/indulgeDB");

const Inf =  mongoose.model("Inf",infSchema);
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//register page

app.get("/register", function(req, res){
    let allCompanies=[];
    Company.find({},function(err,foundCompanies){
        if(err){
            console.log(err);
        }else{
            foundCompanies.forEach((company) => {
                allCompanies.push(company.name);
            })
            console.log(allCompanies);
            res.send(allCompanies);
        }
    })

})

app.post("/register", function(req, res){
    console.log(req.body);
    let newCompany;
    const user = new User( {
        username:req.body.username,
        password:req.body.password
    });
    Company.findOne({name:req.body.companyname},function(err, foundCompany){
        if(err){
            console.log(err);
        }else{
            if(foundCompany){
                newCompany = foundCompany;
            }else{
                newCompany = new Company({
                    name:req.body.companyname,
                    date:new Date()
                });
            }
            var existingUsers=[];
            newCompany.users.forEach((user)=>{
                existingUsers.push(user.username);
            })
            console.log(newCompany);
            if(existingUsers.includes(user.username)){
                console.log("User "+user.username+" already exists.");
            }
            else{
                User.register({username: req.body.username, date: new Date()}, req.body.password, function(err, user){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(user);
                        newCompany.users.push(user);
                        newCompany.save(function(err){
                            if(err){
                               console.log(err);
                            }else{
                                passport.authenticate('local')(req, res, function(){
                                    res.send(newCompany);
                                 });    
                            }
                        })
                       
                    }
                })
            }
        }
    })  
});


//login page

app.get("/login", function(req, res){
    res.redirect("/register");
})

app.post("/login", function(req, res){
    
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })
    console.log(user);
    
    Company.findOne({name: req.body.companyname},function(err, foundCompany){
        if(!err){
            req.login(user, function(err){
                if(!err){
                    passport.authenticate('local')(req, res, function(){
                        res.send(foundCompany.id);                         }); 
                }else{
                        console.log("invalid username or password");
                }
            })
        }
        else{
            console.log(err);
        }
    })
});


//Dashboard

app.get("/CompanyDashboard/:companyName",function(req, res) {
    if(req.isAuthenticated()){
        const companyName = req.params.companyName;
        Company.findOne({name:companyName},function(err, foundCompany){
            if(err){
                console.log(err);
            }else{
                res.send(foundCompany.infs);
            }
        })
    }
    
})


//INF

app.get("/add-new-inf", function(req, res){
    Course.find({},function(err, foundCourses){
        if(!err)
        res.send(foundCourses);
        else
        console.log(err);
    })
});

app.post("/add-new-inf", function(req, res){
    const companyName = req.body.companyName;
    console.log(companyName);
    Company.findOne({name: companyName}, function(err, foundCompany){
        if(err){
            console.log(err);
        }else{
            const newInf = new Inf ({
                companyname:req.body.companyName,
                season:req.body.season,
                role:req.body.role,
                date: new Date()
            });
            foundCompany.infs.push(newInf);
            foundCompany.save(function(err){
                if(err)
                console.log(err);
                else{
                console.log("successfully added inf");
                res.send(newInf);
                }
            })
        }
    })    


});


//jnf

app.get("/add-new-jnf", function(req, res){
    Course.find({},function(err, foundCourses){
        if(!err)
        res.send(foundCourses);
        else
        console.log(err);
    })
});




app.get("/courses", function(req, res){
    const course1 = new Course ({
        programName: "4YearBTech",
        courseName: "Computer Science and Engineering"
    });
    Course.find({}, function(err, allCourses){
        if(err){
            console.log(err);
        }else{
            res.send(allCourses);
            // console.log("Added the course: "+addedCourse);
        }
    });
});

app.post("/new-course", function(req, res){ 
    const course1 = new Course ({
        programName: req.body.program,
        courseName: req.body.course
    });
    Course.create(course1, function(err, addedCourse){
        if(err){
            console.log(err);
        }else{
            console.log("Added the course: "+addedCourse);
        }
    });
});





app.listen(5000,function(){
    console.log("backend running in the port 5000");
})

