const http = require("http"),
fs = require("fs"),
//USING NOSCDB DATABASE... Visit: https://github.com/KBismark/noscdb
  
ndb = require("noscdb"), {date,roundUpDate}=ndb.noscDate,
// USING SOCKET.IO.... Visit: https://socket.io
{ Server } = require("socket.io"),url = require("url");
ndb.override_fs=fs;
ndb.sync=true;
var db = ndb.createDatabase("./CodeChat/data");
var chatTable = {
    tablename:"chat_table",
    columns:['name','members','id','other'],
    created:false,
    storageColumns:["messages",'others']
};
db.createDispersedTable(chatTable,(created)=>{
    if(created){
        start();
    }
})
function start(){
    const server = http.createServer();
    server.on("request",(req,res)=>{
        console.log(req.url);
        res.on("error",(e)=>{
            console.log("RESPONSE ERROR:");
            console.log(e);
        });
        req.on("error",(e)=>{
            console.log("REQUEST ERROR:");
            console.log(e);
        });
        var urlx = url.parse(req.url);
        if(urlx.pathname==="/parse.css"){
            fs.readFile("./CodeChat/front/parse.css",(err,data)=>{
                if(!err){
                    res.writeHead(200,{
                        "Content-Type":"text/javascript",
                        'Cache-Control':'max-age=6048000,immutable'
                    }).end(data);
                }else{
                    res.writeHead(404).end();
                }
            })
        }else if(urlx.pathname==="/parse.js"){
            fs.readFile("./CodeChat/front/parse.js",(err,data)=>{
                if(!err){
                    res.writeHead(200,{
                        "Content-Type":"text/javascript",
                        'Cache-Control':'max-age=6048000,immutable'
                    }).end(data);
                }else{
                    res.writeHead(404).end();
                }
            })
        }else if(urlx.pathname==="/io.js"){
            fs.readFile("./CodeChat/front/io.js",(err,data)=>{
                if(!err){
                    res.writeHead(200,{
                        "Content-Type":"text/javascript",
                        'Cache-Control':'max-age=6048000,immutable'
                    }).end(data);
                }else{
                    res.writeHead(404).end();
                }
            })
        }else if(urlx.pathname==="/back.js"){
            fs.readFile("./CodeChat/front/back.js",(err,data)=>{
                if(!err){
                    res.writeHead(200,{
                        "Content-Type":"text/javascript",
                        'Cache-Control':'max-age=6048000,immutable'
                    }).end(data);
                }else{
                    res.writeHead(404).end();
                }
            })
        }else if(urlx.pathname==="/"){
            fs.readFile("./CodeChat/front/index.html",(err,data)=>{
              
                if(!err){
                    res.writeHead(200,{
                        'Content-Type':"text/html"
                    }).end(data);
                }else{
                    res.writeHead(404).end();
                }
            })
        }else if(urlx.pathname==="/ajax.js"){
            fs.readFile("./CodeChat/front/ajax.js",(err,data)=>{
                if(!err){
                    res.writeHead(200,{
                        "Content-Type":"text/javascript",
                        'Cache-Control':'max-age=6048000,immutable'
                    }).end(data);
                }else{
                    res.writeHead(404).end();
                }
            })
        }
    })



    const io = new Server(server);
    io.on("connection",(socket)=>{
        // New user connected
        function getdata(data){
            var mainData=data;
            data = data.data.id;
            /*if(typeof (mainData.isInAlready.time)!=="undefined"){

                return;
            };*/
            db.dispersedRowExists(chatTable.tablename,data,(exists)=>{
                if(exists){
                    socket.join(data);
                   // socket.emit("evil",!!0);
                    var read = db.readFromDispersedStorage({
                        tablename:chatTable.tablename,
                        id:data,storageColumn:chatTable.storageColumns[0]
                    },()=>{
                        socket.emit("evil",{
                            errored:!0
                        });
                    });
                    read.date(2022,{from:1,to:12},{from:1,to:31})
                    .FIFO().withTime().ondata((dataArr)=>{
                        if(dataArr){
                            socket.emit("evil",{
                                dataArray:dataArr
                            });
                        }
                    }).onend(()=>{
                        socket.emit("evil",{
                            done:!0
                        });
                    });
                    if(typeof (mainData.isInAlready.time)!=="undefined"){
                        // load messages from when user left
                        var continuedate = roundUpDate(mainData.isInAlready.time);
                        read.startFrom(
                            continuedate.month,
                            continuedate.day,
                            continuedate.hour,
                            continuedate.minute,
                            continuedate.second
                        );
                    }
                }else{
                    socket.emit("evil",{
                        evil:!0
                    });
                }
            })
        };
        socket.emit("party","",(feed)=>{
            //console.log(feed);
        });
        socket.on("party-res",getdata);
        socket.on("creategrp",(dt,feedback)=>{
            db.createDispersedRow(chatTable.tablename,dt,{name:dt,members:[]},(created)=>{
                if(created){
                    db.writeToDispersedStorage({
                        tablename:chatTable.tablename,
                        id:dt,
                        storageColumn:chatTable.storageColumns[0],
                        data:{
                            message:"Hello👋👋 Genius!. Welcome. \n You can send messages to your friends in this group and get your codes highlighted as well.\nYour friends can join by joining your group.\nWe chat, we code.",
                            code:"",lang:"js",sender:"KBismark",senderid:0
                        }
                    },(wrt)=>{
                        if(wrt){
                            db.writeToDispersedStorage({
                                tablename:chatTable.tablename,
                                id:dt,
                                storageColumn:chatTable.storageColumns[0],
                                data:{
                                    message:"Try me!",
                                    code:"!function Testme(){\n    console.log(\"Use double qoutes for all strings in your code.\");\n    //using single quotes for strings \n    console.log('Find me on github.com/Kbismark')\n}();",lang:"js",sender:"KBismark",senderid:0
                                }
                            },(wrt)=>{
                                feedback({created:!0});
                            });
                        }else{
                            feedback({created:!!0});
                        }
                    });
                }else{
                    feedback({created:!!0});
                }
            });
        });
        socket.on("send",(data,feedback)=>{
            try {
                data = JSON.parse(data)
            } catch (error) {
                data = null;
            }
            if(data){
                db.writeToDispersedStorage({
                    tablename:chatTable.tablename,
                    id:""+data.id,
                    storageColumn:chatTable.storageColumns[0],
                    data:data.data
                },(wrt)=>{
                    if(wrt){
                        feedback({id:wrt});
                        data.time= date();
                        io.in(data.id).emit("new",data);
                    }else{
                        feedback(null);
                    }
                });
            }else{
                feedback(null);
            }
        });
    });

    server.listen(8769,()=>{
        console.log("Listeneng....");
    });
};

