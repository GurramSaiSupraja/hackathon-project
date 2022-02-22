import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Company from './companySchema.js';
import Course from './courseSchema.js';
import infSchema  from './infSchema.js';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000"
}))
mongoose.connect("mongodb://localhost:27017/indulgeDB");


const Inf =  mongoose.model("Inf",infSchema);

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
    const user = {
        username:req.body.username,
        password:req.body.password
    }
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
            console.log("existing users "+newCompany.users);
            if(existingUsers.includes(user.username)){
                console.log("User "+user.username+" already exists.");
            }
            else{
                newCompany.users.push({
                    username:req.body.username,
                    password:req.body.password,
                    date:new Date()});
                newCompany.save(function(err){
                    if(err){
                        console.log(err);
                    }else{
                         console.log("The user "+user.username + " got registered!");
                         res.send(newCompany);
                    }    
                    });
            }
            
        }
    })

    
   
});


//login page

app.get("/login", function(req, res){
    res.redirect("/register");
})

app.post("/login", function(req, res){
    console.log(req.body);
    Company.findOne({name: req.body.companyname},function(err, foundCompany){
        if(!err){
            if(foundCompany){
                console.log("found users:"+ foundCompany.users);
                const user = foundCompany.users.filter((user)=>{
                    return (user.username === req.body.username);
                    });
                if(user.length == 1){
                    if(user[0].password === req.body.password){
                        console.log("Logged in!!");
                        res.send(foundCompany.id);
                    }
                    else{
                        console.log("incorrect password."+ user[0].password + " "+req.body.password);
                    }
                }else if(user.length == 0 ){
                    console.log("no user found, please register!");
                }
            }else{
                console.log("No user found, please register");
            }
        }
        else{
            console.log(err);
        }
    })
});


//Dashboard

app.get("/CompanyDashboard/:companyName",function(req, res) {
    const companyName = req.params.companyName;
    Company.findOne({name:companyName},function(err, foundCompany){
        if(err){
            console.log(err);
        }else{
            res.send(foundCompany.infs);
        }
    })
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
            console.log(foundCompany);
            // foundCompany.infs.push(newInf);
            // foundCompany.save(function(err){
            //     if(err)
            //     console.log(err);
            //     else
            //     console.log("successfully added inf");
            // })
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

