function Parser(themenum){
    function Elments(){
        var d = document;
        var New = null; newed = false;
        var Obj = null;
        this.new = function(el){
            New = null;
            New = d.createElement(el);
            return this.new;
        };
        this.new.text = function(t){
            New.textContent = t;
            return this;
        };
        this.new.html = function(t){
            New.innerHTML = t;
            return this;
        };
        this.new.addText = function(t){
            New.textContent += t;
            return this;
        };
        this.new.addHtml = function(t){
            New.innerHTML += t;
            return this;
        };
        this.new.attri = function(att,val){
            New.setAttribute(att,val);
            return this;
        };
        this.new.get = function(){
            return New;
        };



        this.targ = function(obj){
            Obj = null;
            Obj = obj;
            return this;
        };
        this.getObj = function(){ return Obj;};

        this.append = function(obj){
            Obj.appendChild(obj);
            return this;
        };
        this.appendText = function(t){
            Obj.appendChild(d.createTextNode(t));
            return this;
        };
        this.text = function(t){
            Obj.textContent = t;
            return this;
        };
        this.html = function(t){
            Obj.innerHTML = t;
            return this;
        };
        this.addHtml = function(t){
            Obj.innerHTML += t;
            return this;
        };


        this.Id = function(id){
            return d.getElementById(id);
        };
        this.Class = function(cls,obj){
            if(obj){return obj.getElementsByClassName(cls);}
            return d.getElementsByClassName(cls);
        };
        this.Tag = function(tag,obj){
            if(obj){return obj.getElementsByTagName(tag);}
            return d.getElementsByTagName(tag);
        };
        this.copyEl = function _copyEl(from,to,bool){
            if(typeof (bool)!=="boolean"){
                bool=true;
            }
            to.appendChild(from.cloneNode(bool));
        };
    }
    var neutraliserCount=-1;
    function Neutraliser(){
        var curentString = [],cur=0,i,cT=0;
        neutraliserCount++;
        var curentN_count = neutraliserCount;
        this.cc = function(){return curentN_count;}
        this.text = function(str){
            curentString.push(str);
            return '<span class="N-not-trusted" id="N-not-trusted'+(curentString.length-1)/*-'+curentN_count+*/+'"></span>';
        };
        this.codeText = function(str){
            cT++;
            return '<span class="mdcode-inline" id="mdcodiline"></span>';
        };
        this.ct = function(){return cT;};
        this.$=this.text;
        this.c$ = this.codeText;
        function parse(c){
            if(curentString.length>0){
                /*var els = document.getElementsByClassName("N-not-trusted"),l = cur;
                for(i=0;i<curentString.length;i++){
                    els[l].textContent = curentString[i];
                    l++;
                }
                cur += curentString.length;
                curentString = [];*/
                for(i=0;i<curentString.length;i++){
                    var did = document.getElementById("N-not-trusted"+i);
                    did.removeAttribute("id");
                    did.textContent = curentString[i];
                    //l++;
                }
                curentString=[];
            }
        }
        Element.prototype.HTML = function(s,This){
            this.innerHTML = s;
            parse(/*This.cc()*/);
        }
        Element.prototype.addHTML = function(s,This){
            this.innerHTML += s;
            parse(/*This.cc()*/);
        }
    };

    function numbs(){
        var i,r=false;
        for(i=1;i<arguments.length;i++){
            if(arguments[0]===arguments[i]){
                r = true;break;
            }
        }
        return r;
    }
    //themenum = '';
    var j,i=0;
    var getString = String.fromCharCode;
    var Elems = new Elments();
    function theme(){
        Theme={str:"rgb(179, 66, 37)",cm:"rgb(85, 179, 85)",bg:"#03111b",k1:"#1168cc",k2:"#80468f",k3:"#85d6eb",k4:"rgb(238, 225, 151)",sp:"rgb(218, 209, 209)",n:"rgb(143, 226, 185)"};
        switch (themenum) {
            case 1:
                Theme={str:"#de5926",cm:"gray",bg:"#100d25",k1:"#14abf3",k2:"#fd0ab2",k3:"#07ffff",k4:"#f1d433",sp:"gray",n:"white"};
                break;
            case 2:
                Theme={str:"#b3572ad1",cm:"#e81111",bg:"#03111b",k1:"#a5533a",k2:"#80468f",k3:"",k4:"rgb(218, 209, 209)",sp:"rgb(218, 209, 209)",n:"rgb(143, 226, 185)"};
                break;
            case 4:
                //inline #9dad6e
                Theme={str:"rgb(179, 66, 37)",cm:"#8a7564",bg:"rgba(27, 31, 35, 0.051)",k1:"#4b65af",k2:"#80468f",k3:"#9dad6e",k4:"#cc875d",sp:"#ebebebd7",n:"#ebebebd7"};
                Theme={str:"rgb(179, 66, 37)",cm:"#8a7564",bg:"rgba(27, 31, 35, 0.051)",k1:"#4b65af",k2:"#80468f",k3:"#3e3b39",k4:"#9dad6e",sp:"#3e3b39",n:"#3e3b39"};
                break;
            case 3:
                //inline #f92672
                Theme={str:"#8f723be7",cm:"gray",bg:"rgba(27, 31, 35, 0.051)",k1:"rgb(179, 66, 37)",k2:"#80468f",k3:"rgba(218, 216, 216, 0.877)",k4:"#9dad6e",sp:"rgba(218, 216, 216, 0.877)",n:"rgba(218, 216, 216, 0.877)"};
                break;
        }
    };
    theme();
    var neutral = new Neutraliser();
    var inreptag1 = getString(2519)+getString(598)+getString(721)+getString(1940);
    var inreptag2 = getString(902)+getString(1193)+getString(1447)+getString(889);
    var newllnne = getString(2902)+getString(1003)+getString(447)+getString(3889)+getString(1089);
    function editInline(obj,s){
        s = s.replace(RegExp("\n","g"),newllnne);
        var codes = s.match(/<<js>>(.*?)<<js>>/g),txts,j=0,i;
        var cd=false,md_cd=0;
        if(null!==codes){
            cd=true;
            for(i=0;i<codes.length;i++){
                s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                codes[i] = codes[i].replace(/<<js>>/g,"");
                codes[i] = codes[i].replace(RegExp(newllnne,"g")," ");
            }
            txts = s.split(inreptag2);
            //obj.HTML("");
            for(i=0;i<txts.length;i++){
                if(txts[i]!==""&&txts[i]!==inreptag1){
                    //obj.addHTML(neutral.text(txts[i]));

                    editInline(obj,txts[i]);
                }else if(txts[i]===inreptag1){
                    themenum = 3;theme();
                    var curct = neutral.ct();
                    obj.innerHTML+=neutral.codeText();
                    var div = Elems.Class("mdcode-inline",obj)[md_cd];
                    md_cd++;
                    //document.getElementById("mdcodiline");
                    //div.removeAttribute("id");
                    toEditor(/*Elems.Class("mdcode-inline")[curct]*/div,codes[j],"js",true);
                    j++;
                }
            }
        }else{
            codes = s.match(/<<c>>(.*?)<<c>>/g);
            if(null!==codes){
                cd=true;
                for(i=0;i<codes.length;i++){
                    s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                    codes[i] = codes[i].replace(/<<c>>/g,"");
                    codes[i] = codes[i].replace(RegExp(newllnne,"g")," ");
                }
                txts = s.split(inreptag2);
                //obj.HTML("");
                for(i=0;i<txts.length;i++){
                    if(txts[i]!==""&&txts[i]!==inreptag1){
                        //obj.addHTML(neutral.text(txts[i]));
                        editInline(obj,txts[i]);
                    }else if(txts[i]===inreptag1){
                        themenum = 3;theme();
                        var curct = neutral.ct();
                        obj.innerHTML+=neutral.codeText();
                        var div = Elems.Class("mdcode-inline",obj)[md_cd];
                        md_cd++;
                        //document.getElementById("mdcodiline");
                        //div.removeAttribute("id");  
                        toEditor(div,codes[j],"c/cpp",true);
                        j++;
                    }
                }
            }else{
                codes = s.match(/<<c\+\+>>(.*?)<<c\+\+>>/g);
                if(null!==codes){
                    cd=true;
                    for(i=0;i<codes.length;i++){
                        s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                        codes[i] = codes[i].replace(/<<c\+\+>>/g,"");
                        codes[i] = codes[i].replace(RegExp(newllnne,"g")," ");
                    }
                    txts = s.split(inreptag2);
                    //obj.HTML("");
                    for(i=0;i<txts.length;i++){
                        if(txts[i]!==""&&txts[i]!==inreptag1){
                            //obj.addHTML(neutral.text(txts[i]));
                            editInline(obj,txts[i]);
                        }else if(txts[i]===inreptag1){
                            themenum = 3;theme();
                            var curct = neutral.ct();
                            obj.innerHTML+=neutral.codeText();
                            var div = Elems.Class("mdcode-inline",obj)[md_cd];
                            md_cd++;
                            //document.getElementById("mdcodiline");
                            //div.removeAttribute("id");
                            toEditor(div,codes[j],"c/cpp",true);
                            j++;
                        }
                    }
                }else{
                    codes = s.match(/<<java>>(.*?)<<java>>/g);
                    if(null!==codes){
                        cd=true;
                        for(i=0;i<codes.length;i++){
                            s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                            codes[i] = codes[i].replace(/<<java>>/g,"");
                            codes[i] = codes[i].replace(RegExp(newllnne,"g")," ");
                        }
                        txts = s.split(inreptag2);
                        //obj.HTML("");
                        for(i=0;i<txts.length;i++){
                            if(txts[i]!==""&&txts[i]!==inreptag1){
                                //obj.addHTML(neutral.text(txts[i]));
                                editInline(obj,txts[i]);
                            }else if(txts[i]===inreptag1){
                                themenum = 3;theme();
                                var curct = neutral.ct();
                                obj.innerHTML+=neutral.codeText();
                                var div = Elems.Class("mdcode-inline",obj)[md_cd];
                                md_cd++;
                                //document.getElementById("mdcodiline");
                                //div.removeAttribute("id");
                                toEditor(div,codes[j],"java",true);
                                j++;
                            }
                        }
                    }else{
                        codes = s.match(/<<c#>>(.*?)<<c#>>/g);
                        if(null!==codes){
                            cd=true;
                            for(i=0;i<codes.length;i++){
                                s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                                codes[i] = codes[i].replace(/<<c#>>/g,"");
                                codes[i] = codes[i].replace(RegExp(newllnne,"g")," ");
                            }
                            txts = s.split(inreptag2);
                            //obj.HTML("");
                            for(i=0;i<txts.length;i++){
                                if(txts[i]!==""&&txts[i]!==inreptag1){
                                    //obj.addHTML(neutral.text(txts[i]));
                                    editInline(obj,txts[i]);
                                }else if(txts[i]===inreptag1){
                                    themenum = 3;theme();
                                    var curct = neutral.ct();
                                    obj.innerHTML+=neutral.codeText();
                                    var div = Elems.Class("mdcode-inline",obj)[md_cd];
                                    md_cd++;
                                    //document.getElementById("mdcodiline");
                                    //div.removeAttribute("id");
                                    toEditor(div,codes[j],"c#",true);
                                    j++;
                                }
                            }
                        }else if(s.includes(newllnne)){//<<link=https://google.com/fgfugtkgg/frirjgt/igyg?aps=jfufugughghj&kj=jfjhrdtf>>Google<<link>>
                            //s = s.replace(RegExp(newllnne,"g"),"\n");
                        
                        
                            s = s.split(newllnne);
                            var l;
                            for(l in s){
                                editInline(obj,s[l]);
                                obj.innerHTML += "<br>";
                            }
                        }else{

                        
                            cd=true;
                            //codes = s.match(/<<link=(.*?)<<link>>/g);
                            codes = s.match(/<<link>>(.*?)<<link>>/g);
                            //codes = s.match(/<<link(.*?)>>/g);
                            if(null!==codes){
                                for(i=0;i<codes.length;i++){
                                    s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                                    //codes[i] = codes[i].replace("<<link=","").replace("<<link>>","").split(">>");
                                    codes[i] = codes[i].replace(/<<link>>/g,"");
                                    //codes[i] = codes[i].replace(/<<link/g,"");
                                    //codes[i] = codes[i].replace(/>>/g,"");
                                }
                                txts = s.split(inreptag2);
                                for(i=0;i<txts.length;i++){
                                    if(txts[i]!==""&&txts[i]!==inreptag1){
                                        //obj.addHTML(neutral.text(txts[i]));
                                        editInline(obj,txts[i]);
                                    }else if(txts[i]===inreptag1){
                                        obj.innerHTML+='<a target="_blank" rel="noopener" id="in-line-llinkks"></a>';
                                        var div = document.getElementById("in-line-llinkks");
                                        div.removeAttribute("id");
                                        /*if(codes[j].length===2){
                                            if(codes[j][1].length<=0){
                                                div.textContent=codes[j][0];
                                            }else{
                                                div.textContent=codes[j][1];
                                            }
                                            div.setAttribute("href",codes[j][0]);
                                        }else{
                                            codes[j] = codes[j].join("");
                                            div.textContent=codes[j];
                                            div.setAttribute("href",codes[j]);
                                        }*/
                                        div.textContent=codes[j];
                                        div.setAttribute("href",codes[j]);
                                        j++;
                                    }
                                }
                            }else{
                               
                                codes = s.match(/<<b>>(.*?)<<b>>/g);
                                if(null!==codes){
                                    for(i=0;i<codes.length;i++){
                                        s = s.replace(codes[i],inreptag2+inreptag1+inreptag2);
                                        //codes[i] = codes[i].replace("<<link=","").replace("<<link>>","").split(">>");
                                        codes[i] = codes[i].replace(/<<b>>/g,"");
                                        //codes[i] = codes[i].replace(/<<link/g,"");
                                        //codes[i] = codes[i].replace(/>>/g,"");
                                    }
                                    txts = s.split(inreptag2);
                                    for(i=0;i<txts.length;i++){
                                        if(txts[i]!==""&&txts[i]!==inreptag1){
                                            editInline(obj,txts[i]);
                                        }else if(txts[i]===inreptag1){
                                            obj.innerHTML+='<strong id="in-line-llinkks"></strong>';
                                            var div = document.getElementById("in-line-llinkks");
                                            div.removeAttribute("id");
                                            
                                            div.textContent=codes[j];
                                            j++;
                                        }
                                    }
                                }
                                else{
                                
                                    obj.addHTML(neutral.text(s));
                                }
                            }
                        }
                    }
                }
            }

        }
    };
    var mCommentReplacer = getString(2467)+getString(993)+getString(1535)+getString(967);
    var sCommentReplacer = getString(489)+getString(2328)+getString(1921)+getString(962);
    var dStrinReplacer = getString(647)+getString(1246)+getString(769)+getString(1979);
    var mComOut1 = getString(728)+getString(923)+getString(1829)+getString(415);
    var mComOut2 = getString(798)+getString(1423)+getString(647)+getString(829);
    var sComOut = getString(902)+getString(1193)+getString(1447)+getString(889);
    var lnBreaks = getString(1678)+getString(923)+getString(503)+getString(691);
    var clsTags = getString(2819)+getString(528)+getString(1621)+getString(640);
    var clsTagss = getString(2519)+getString(598)+getString(721)+getString(1940);
    function toEditor(obj,s,lang,inline){
        if(typeof (inline)!=="boolean"){inline=false;}
        s = " "+s+"\n";
        var ij,ii,x,curr = getString(287+i);
        s = s.replace(RegExp("\n","g"),"\n ");
        s = s.replace(RegExp("\n","g"),lnBreaks);

        var dStrings = s.match(/"([^"]*)"/g),dStringss;
        var wxcp = "+?/)(*][&$|\\^.";
        if(null!==dStrings){
            for(ii=0;ii<dStrings.length;ii++){
                dStringss = dStrings[ii];
                dStrings[ii] = dStrings[ii].replace(RegExp("\\/\\*","g"),mComOut1);
                dStrings[ii] = dStrings[ii].replace(RegExp("\\*\\/","g"),mComOut2);
                dStrings[ii] = dStrings[ii].replace(RegExp("\\/\\/","g"),sComOut);
                dStringss = dStringss.split("");
                for(ij in dStringss){
                    if(wxcp.includes(dStringss[ij])){
                        dStringss[ij]="\\"+dStringss[ij];
                    }
                }
                dStringss = dStringss.join("");
                s = s.replace(RegExp(dStringss,"g"),dStrings[ii]);
            }

        }
        var multiC = s.match(/\/\*(.*?)\*\//g);
        x=0;
        if(null!==multiC&&null!==dStrings){
            for(j in multiC){
                s = s.replace(multiC[j],mCommentReplacer+getString(634+x));x++;
                multiC[j] = multiC[j].replace(RegExp(mComOut1,"g"),"/*").replace(RegExp(mComOut2,"g"),"*/");
                multiC[j] = multiC[j].replace(RegExp(lnBreaks,"g"),"\n");
            }
        }else if(null!==multiC){
            for(j in multiC){
                s = s.replace(multiC[j],mCommentReplacer+getString(634+x));
                multiC[j] = multiC[j].replace(RegExp(lnBreaks,"g"),"\n");x++;
            }
        }
        
        s = s.replace(RegExp(lnBreaks,"g"),"\n");
        var singleC = s.match(/\/\/(.*?)\n/g),singls;
        if(null!==singleC){
            x=0;
            if(inline){s = s.replace(RegExp("\n","g"),"");singleC[0]=singleC[0].replace(RegExp("\n","g"),"");};
            for(j in singleC){
                singls = singleC[j];
                s = s.replace(singls,sCommentReplacer+getString(634+x));
                if(null!==multiC){
                    for(ii=0;ii<multiC.length;ii++){
                        singleC[j] = singleC[j].replace(mCommentReplacer+getString(634+ii),multiC[ii]);
                    }
                }
                x++;
            }
        }else{
            if(inline){s = s.replace(RegExp("\n","g"),"");};
        }

        s = s.replace(RegExp("\n","g"),lnBreaks);
        if(null!==dStrings){
            x=0;
            for(j in dStrings){
                dStringss = dStrings[j];
                dStrings[j] = dStrings[j].replace(RegExp(mComOut1,"g"),"/*");
                dStrings[j] = dStrings[j].replace(RegExp(mComOut2,"g"),"*/");
                dStrings[j] = dStrings[j].replace(RegExp(sComOut,"g"),"//");
                dStrings[j] = dStrings[j].replace(RegExp(lnBreaks,"g"),"\\n");
                dStringss = dStringss.split("");

                for(ij in dStringss){
                    if(wxcp.includes(dStringss[ij])){
                        dStringss[ij]="\\"+dStringss[ij];
                    }
                    
                }
                dStringss = dStringss.join("");
                s = s.replace(RegExp(dStringss,"g"),dStrinReplacer+getString(634+x));x++;
            }
        }
        s = s.replace(RegExp(lnBreaks,"g"),"\n");

        s = s.replace(RegExp("<\\/","g"),clsTags);
        var htmlTags = ["script","html","i","head","meta","body","style","p","div","title","link"],htmlCpart=[],hts;
        var gkwords1 = ["const","export","false","true","final","void"]; 
        var gkwords2 = ["while","break","try","case","catch","continue","default","do","else","for","goto","if","return","throw","switch"];
        var spkwords1 = []; 
        var spkwords2 = [];
        switch (lang) {
            case "c/cpp":
                spkwords1 = ["module","class","namespace","NULL","int","float","long","short","double","auto","typedef","union",
                        "enum","extern","char","unsigned","signed","register","struct","volatile","static","string","public","private"];
                spkwords2 = ["using","#include"];
                lang = ".c/cpp";
                break;
            /*case "c++":break;*/
            case "java":
                spkwords1 = ["module","abstract","this","private","public","int","boolean","_","short","char","double","protected",
                            "native","class","implements","uses","float","instanceof","new","strictfp","super","volatile","interface",
                            "record","transient","long","extends","package","synchronized","with","null","byte","static","String"];
                spkwords2 = ["finally","assert"];
                lang = ".java";
                break;
            case "py":
                lang = ".py";
                break;
            case "c#":

                break;
            case "js":
                spkwords1 = ["=>","debugger","async","delete","function","in","instanceof","interface","new","null",
                "super","this","typeof","var","let","of","NaN","class"];
                spkwords2 = ["with","finally","package","import","as","await"];
                lang = ".js";
                break;
            default:
                lang = "def";
        } 

        for(j in htmlTags){
            s = s.replace(RegExp("<"+htmlTags[j]+">","g"),"<"+getString(902)+getString(1193)+getString(346+j)+getString(889)+">");
            s = s.replace(RegExp(clsTags+htmlTags[j]+">","g"),clsTags+getString(902)+getString(1193)+getString(346+j)+getString(889)+">");
            s = s.replace(RegExp("<"+htmlTags[j]+" ","g"),"<"+getString(902)+getString(1193)+getString(346+j)+getString(889)+" ");
        }
        var wChars = [" ",";","-","=","+","?","/",",",":",")","}","{","(","*","]","[","&","%","!","|","<","^","\n",mCommentReplacer,sCommentReplacer,"."];
        var wxcpe = "-+?/)(*][&|^.",w,wh1,wh2;
        for(j in gkwords1){
            hts = getString(772)+getString(993)+getString(278+j)+getString(3219);
            for(ii=0;ii<wChars.length-1;ii++){
                wh1 = wChars[ii];
                if(wxcpe.includes(wh1)){
                    wh1 = "\\"+wh1;
                }
                for(w=0;w<wChars.length;w++){
                    wh2 = wChars[w];
                    if(wxcpe.includes(wh2)){
                        wh2 = "\\"+wh2;
                    }
                    s = s.replace(RegExp(wh1+gkwords1[j]+wh2,"g"),wChars[ii]+hts+wChars[w]);
                }
            }
        }
        for(j in gkwords2){
            hts = getString(801)+getString(762)+getString(483+j)+getString(319);
            for(ii=0;ii<wChars.length-1;ii++){
                wh1 = wChars[ii];
                if(wxcpe.includes(wh1)){
                    wh1 = "\\"+wh1;
                }
                for(w=0;w<wChars.length-1;w++){
                    wh2 = wChars[w];
                    if(wxcpe.includes(wh2)){
                        wh2 = "\\"+wh2;
                    }
                    s = s.replace(RegExp(wh1+gkwords2[j]+wh2,"g"),wChars[ii]+hts+wChars[w]);
                }
            }
        }
        for(j in spkwords2){
            hts = getString(1801)+getString(2762)+getString(513+j)+getString(459);
            for(ii=0;ii<wChars.length-1;ii++){
                wh1 = wChars[ii];
                if(wxcpe.includes(wh1)){
                    wh1 = "\\"+wh1;
                }
                for(w=0;w<wChars.length-1;w++){
                    wh2 = wChars[w];
                    if(wxcpe.includes(wh2)){
                        wh2 = "\\"+wh2;
                    }
                    s = s.replace(RegExp(wh1+spkwords2[j]+wh2,"g"),wChars[ii]+hts+wChars[w]);
                }
            }
        }
        for(j in spkwords1){
            hts = getString(281)+getString(662)+getString(411+j)+getString(1459);
            for(ii=0;ii<wChars.length-1;ii++){
                wh1 = wChars[ii];
                if(wxcpe.includes(wh1)){
                    wh1 = "\\"+wh1;
                }
                for(w=0;w<wChars.length;w++){
                    wh2 = wChars[w];
                    if(wxcpe.includes(wh2)){
                        wh2 = "\\"+wh2;
                    }
                    s = s.replace(RegExp(wh1+spkwords1[j]+wh2,"g"),wChars[ii]+hts+wChars[w]);
                }
            }
        }
        
    //-----------------------------------------------------------------


   var num,Numbers = s.match(/[0-9]/g),indx,spc,numhold="",curindx,x,inx1=0;
   var numArr = [],numArrs=[];
    if(null!==Numbers&&Numbers.length>=1){
        var xx = Numbers.length-1;
        for(x=0;x<Numbers.length;x++){
            curindx=s.indexOf(Numbers[x],inx1);
            inx1 = curindx+1;
            if(x==0){
                numhold+=Numbers[x]+"";
                if(s[curindx+1]===Numbers[x+1]){
                    numhold+=Numbers[x+1]+"";
                }else if(numbs(s[curindx+1]," ",".","(","[","{","!","=","+","-","*","\\","%","< =","= >","=>","<=","?","/","|","}","]",")",";",",",">","<","^","\n")){
                    numArr.push(numhold);
                    numhold = "";
                }else{
                    numhold = "";
                }
            }else if(numhold.length<=0){
                    if(numbs(s[curindx-1]," ",".","(","[","{","!","=","+","-","*","\\","%","< =","> =",">=","=>","<=","?","/","|","}","]",")",";",",",">","<","^","\n")){
                        numhold+=Numbers[x]+"";

                        if(s[curindx+1]===Numbers[x+1]){
                            numhold+=Numbers[x+1]+"";
                        }else if(numbs(s[curindx+1]," ",".","(","[","{","!","=","+","-","*","\\","%","< =","> =",">=","=>","<=","?","/","|","}","]",")",";",",",">","<","^","\n")){
                            numArr.push(numhold);
                            numhold = "";
                        }else{
                            numhold = "";
                        }
                    }
            }else{
                if(s[curindx+1]===Numbers[x+1]){
                    numhold+=Numbers[x+1]+"";
                }else if(numbs(s[curindx+1]," ",".","(","[","{","!","=","+","-","*","\\","%","< =","> =",">=","=>","<=","?","/","|","}","]",")",";",",",">","<","^","\n")){
                    numArr.push(numhold);
                    numhold = "";
                }else{
                    numhold = "";
                }
            }
        }
    }
    var chars = [".","(","[","{","!","=","+","-","*","\\","%","< =","> =",">=","=>","<=","?","/","|","}","]",")"," ",";",",",">","<","^","\n"];
    var numbstr = getString(874)+getString(7777)+getString(1877)+getString(177);
    function repChars(str,curNum){
        var i,j,found=false,strlrn;
        for(i in chars){
            for(j in chars){
                strlrn=str;
                str=str.replace(chars[i]+curNum+chars[j],chars[i]+numbstr+'span class="mdnumbers mdnumbs'+curr+'">'+curNum+numbstr+'/span>'+chars[j]);
                if(str.length!==strlrn.length){
                    break;
                }
            }
        }
        return str;
    }
    
    for(j in numArr){
        s = repChars(s,numArr[j]);
    }


    //-----------------------------------------------------------------


    
        s = s.replace(RegExp("<","g"),'<span class="mdspchars mdspch'+curr+'"><</span>');
        s = s.replace(RegExp(numbstr,"g"),"<");
        s = s.replace(RegExp(clsTags,"g"),'<span class="mdspchars mdspch'+curr+'"><</span><span class="mdspchars mdspch'+curr+'">/</span>');
        if(null!==multiC){
            for(ii=0;ii<multiC.length;ii++){
                s = s.replace(RegExp(mCommentReplacer+getString(634+ii),"g"),'<span class="mdcomments mdnotrust'+curr+'mC">'+getString(634+ii)+'</span>');
            }
        }
        if(null!==singleC){
            for(ii=0;ii<singleC.length;ii++){
                s = s.replace(RegExp(sCommentReplacer+getString(634+ii),"g"),'<span class="mdcomments mdnotrust'+curr+'sC">'+getString(634+ii)+'</span>');
            }
        }
        if(null!==dStrings){
            for(ii=0;ii<dStrings.length;ii++){
                s = s.replace(RegExp(dStrinReplacer+getString(634+ii),"g"),'<span class="mdstrings mdnotrust'+curr+'dS">'+getString(634+ii)+'</span>');
            }
        }
        
        
        
        for(j in htmlTags){
            hts = getString(902)+getString(1193)+getString(346+j)+getString(889);
            s = s.replace(RegExp(hts,"g"),'<span class="mdkeywordi mdkeywords'+curr+'i">'+htmlTags[j]+'</span>');
        }
        for(j in gkwords1){
            hts = getString(772)+getString(993)+getString(278+j)+getString(3219);
            s = s.replace(RegExp(hts,"g"),'<span class="mdkeywordi mdkeywords'+curr+'i">'+gkwords1[j]+'</span>');
        }
        for(j in gkwords2){
            hts = getString(801)+getString(762)+getString(483+j)+getString(319);
            s = s.replace(RegExp(hts,"g"),'<span class="mdkeywordii mdkeywords'+curr+'ii">'+gkwords2[j]+'</span>');
        }
        for(j in spkwords1){
            hts = getString(281)+getString(662)+getString(411+j)+getString(1459);
            s = s.replace(RegExp(hts,"g"),'<span class="mdkeywordi mdkeywords'+curr+'i">'+spkwords1[j]+'</span>');
        }
        for(j in spkwords2){
            hts = getString(1801)+getString(2762)+getString(513+j)+getString(459);
            s = s.replace(RegExp(hts,"g"),'<span class="mdkeywordii mdkeywords'+curr+'ii">'+spkwords2[j]+'</span>');
        }
        s = s.replace(RegExp("\n","g"),lnBreaks);
        s = "<span></span>"+s+"<span></span>";
        var incont = s.match(/\/span>(.*?)<span/g),infunc,funchold=[],curfstr,strnuM="0123456789";
        var funcstr = getString(570)+getString(4262)+getString(510)+getString(6459),l,inconthold;
        var popper,shifter,rpop,rshift,df="";
        wChars = [" ",";","-","=","+","?","/",",",":",")","}","{","(","*","]","[","&","%","!","|","\n","\r","^","."];
        var Wchars = [" ",";","\\-","=","\\+","\\?","\\/",",",":","\\)","}","{","\\(","\\*","\\]","\\[","\\&","%","!","\\|","\n","\r","\\^","\\."];
        
        
        s = s.replace(RegExp(lnBreaks,"g"),"\n");
        var Wcharss = [";","\\-","\\+","\\?",",",":","\\)","}","{","\\*","\\]","\\[","\\&","%","!","\\|","\\.","'","\\^","\n"];
        var wCharss = [";","-","+","?",",",":",")","}","{","*","]","[","&","%","!","|",".","'","^","\n"];
        for(ii=0;ii<Wcharss.length;ii++){
            s = s.replace(RegExp(Wcharss[ii],"g"),'<span class="mdspchars mdspch'+curr+'">'+wCharss[ii]+'</span>');
        }
        incont = s.match(/\/span>(.*?)<span/g);
        if(null!==incont){
           
            var spchold = [];
            for(x=0;x<incont.length;x++){
                inconthold = incont[x];
                inconthold = inconthold.replace("/span>","");
                inconthold = inconthold.replace("<span","");
                inconthold = inconthold.replace(RegExp(">","g"),'<span class'+clsTagss+'"mdspchars mdspch'+curr+'">><'+clsTags+'span>');
                inconthold = inconthold.replace(RegExp("\\/","g"),'<span class'+clsTagss+'"mdspchars mdspch'+curr+'">/</span>');
                inconthold = inconthold.replace(RegExp("=","g"),'<span class="mdspchars mdspch'+curr+'">=</span>');
                inconthold = inconthold.replace(RegExp(clsTags,"g"),"/");
                inconthold = inconthold.replace(RegExp(clsTagss,"g"),"=");
                spchold.push("/span>"+inconthold+"<span");
                
            }
            for(x=0;x<incont.length;x++){
                s = s.replace(incont[x],spchold[x]);
            }
        }
        incont = s.match(/\/span>(.*?)<span/g);
        var others = [],ofhold=[],otstr,OtOfHold=[],ofspce,ofspce2;
        if(null!==incont){
            for(x=0;x<incont.length;x++){
                otstr="";
                infunc = incont[x];
                infunc = infunc.replace("/span>","");
                infunc = infunc.replace("<span","");
                infunc = infunc.split("(");
                for(ii=0;ii<infunc.length-1;ii++){
                    infunc[ii] = infunc[ii].split(" ");
                    ofspce2 = infunc[ii].pop();
                    if(infunc[ii].length>0){
                        ofspce = infunc[ii].join(" ")+" ";
                        if(ofspce===" "){
                            otstr+=" ";
                        }else{
                            if(!others.includes(ofspce)){
                                others.push(ofspce);
                            }
                            otstr+='<span class="mdkeywordiii mdnotrust'+curr+'ot">'+getString(634+others.indexOf(ofspce))+'</span>';
                        }
                    }
                    infunc[ii] = ofspce2;
                    if(!ofhold.includes(infunc[ii])){
                        ofhold.push(infunc[ii]);
                    }
                    otstr+='<span class="mdkeywordiv mdnotrust'+curr+'ff">'+getString(634+ofhold.indexOf(infunc[ii]))+'</span><span class="mdspchars mdspch'+curr+'">(</span>';
                }
                if(infunc[infunc.length-1]!==""){
                    if(infunc[infunc.length-1]===" "){
                        otstr+=" ";
                    }else{
                        if(!others.includes(infunc[infunc.length-1])){
                            others.push(infunc[infunc.length-1]);
                        }
                        otstr+='<span class="mdkeywordiii mdnotrust'+curr+'ot">'+getString(634+others.indexOf(infunc[infunc.length-1]))+'</span>';
                    }
                }
                OtOfHold.push("/span>"+otstr+"<span");
            }
            for(x=0;x<incont.length;x++){
                s = s.replace(incont[x],OtOfHold[x]);
            }
        }
        var markdown;
        if(!inline){
            //let copycode = '<button class="mdcopybut md-xzcpys1-xc" id="md-xzcpys1-xc">'+copppie+'</button><span class="mdcopytip md-ljcpy0i-zc" id="md-ljcpy0i-zc">Copied</span>';
            markdown = Elems.new("pre").attri("class","markdown").attri("id","md2-uv3fsxh1-m").get();
            Elems.targ(obj).addHtml('<div class="mdcopy" style="background-color:'+Theme.bg+';"><div class="mdtip"><button class="mdcodetype">'+lang+'</button>'+copyLikes(1)+copyLikes(2)+'</div></div>');
            Elems.targ(markdown).html(s);
            Elems.targ(obj).append(markdown);
            //var div = Elems.Id("md-xzcpys1-xc");
            var div = Elems.Class('md-xzcpys1-xc',obj);
            //div.removeAttribute("id");
            //var spn = Elems.Id("md-ljcpy0i-zc");
            var spn = Elems.Class('md-ljcpy0i-zc',obj)[0];
            //spn.removeAttribute("id");
            var mkd = markdown;
            div[0].addEventListener("click",function(){
                var r = document.createRange();
                r.selectNode(mkd);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(r);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                spn.style.opacity="1";
                setTimeout(() => {
                    spn.style.opacity="0";
                }, 1000);
            },false);
            let expanded=!!0;
            div[1].addEventListener("click",function(){
                if(!expanded){
                    obj.setAttribute("class","expand-code");
                    mkd.setAttribute("class","markdown-expanded");
                    expanded=!0;
                    this.innerHTML=minicon;
                }else{
                    obj.setAttribute("class","code-wrapper");
                    mkd.setAttribute("class","markdown");
                    expanded=!!0;
                    this.innerHTML=maxicon;
                }
            },false);
            //markdown = /*Elems.Class("markdown");*/Elems.Id("md2-uv3fsxh1-m");
        }else{
            markdown = Elems.new("span").attri("class","markdown-inline").attri("id","md1-uv3brxh2-m").get();
            Elems.targ(markdown).html(s);
            Elems.targ(obj).append(markdown);
            //markdown = /*Elems.Class("markdown-inline")*/Elems.Id("md1-uv3brxh2-m");
        }
       // markdown.removeAttribute("id");
        markdown/*[markdown.length-1]*/.style["background-color"] = Theme.bg;
        var cmM = Elems.Class('mdnotrust'+curr+'mC',markdown);
        var cmS = Elems.Class('mdnotrust'+curr+'sC',markdown);
        var dS = Elems.Class('mdnotrust'+curr+'dS',markdown);
        var fncS = Elems.Class('mdnotrust'+curr+'f',markdown);
        var fncS2 = Elems.Class('mdnotrust'+curr+'ff',markdown);
        var othr = Elems.Class('mdnotrust'+curr+'ot',markdown);
        if(cmM!==null){
            for(ii=0;ii<cmM.length;ii++){
                cmM[ii].textContent = multiC[cmM[ii].textContent.charCodeAt(0)-634];
                cmM[ii].style.color = Theme.cm;
            }
        }
        if(cmS!==null){
            for(ii=0;ii<cmS.length;ii++){
                cmS[ii].textContent = singleC[cmS[ii].textContent.charCodeAt(0)-634].replace(RegExp(mComOut2,"g"),"*/")
                .replace(RegExp(mComOut1,"g"),"/*")
                .replace(RegExp(sComOut,"g"),"//");
                cmS[ii].style.color = Theme.cm;
            }
        }
        if(dS!==null){
            for(ii=0;ii<dS.length;ii++){
                dS[ii].textContent = dStrings[dS[ii].textContent.charCodeAt(0)-634];
                dS[ii].style.color = Theme.str;
            }
        }
        if(fncS!==null){
            for(ii=0;ii<fncS.length;ii++){
                fncS[ii].textContent = funchold[fncS[ii].textContent.charCodeAt(0)-634];
                fncS[ii].style.color = Theme.k4;
            }
        }
        if(fncS2!==null){
            for(ii=0;ii<fncS2.length;ii++){
                fncS2[ii].textContent = ofhold[fncS2[ii].textContent.charCodeAt(0)-634];
                fncS2[ii].style.color = Theme.k4;
            }
        }
        if(othr!==null){
            for(ii=0;ii<othr.length;ii++){
                othr[ii].textContent = others[othr[ii].textContent.charCodeAt(0)-634];
                othr[ii].style.color = Theme.k3;
            }
        }
        var mdspch = Elems.Class('mdspch'+curr,markdown);
        if(mdspch!==null){
            for(ii=0;ii<mdspch.length;ii++){
                mdspch[ii].style.color = Theme.sp;
            }
        }
        mdspch = Elems.Class('mdnumbs'+curr,markdown);
        if(mdspch!==null){
            for(ii=0;ii<mdspch.length;ii++){
                mdspch[ii].style.color = Theme.n;
            }
        }
        mdspch = Elems.Class('mdkeywords'+curr+'i',markdown);
        if(mdspch!==null){
            for(ii=0;ii<mdspch.length;ii++){
                mdspch[ii].style.color = Theme.k1;
            }
        }
        mdspch = Elems.Class('mdkeywords'+curr+'ii',markdown);
        if(mdspch!==null){
            for(ii=0;ii<mdspch.length;ii++){
                mdspch[ii].style.color = Theme.k2;
            }
        }

        i++;
    };
    function copyLikes(n){
        return '<button class="mdcopybut md-xzcpys1-xc" id="md-xzcpys1-xc">'+(n===1?(copppie+'</button><span class="mdcopytip md-ljcpy0i-zc" id="md-ljcpy0i-zc">Copied</span>'):(maxicon+'</button>'));
    };
    this.toEditor = toEditor;
    this.inlineMix = editInline;
    this.theme = function(thme){
        themenum = thme;
        theme();
    };
    var allowNeutral = true;
    this.getNeutraliser = function(){
        if(allowNeutral){
            return neutral;
        }
    };
    this.lockNeutraliser = function(){
        allowNeutral = false;
    }
    this.neutraliser=Neutraliser;
}