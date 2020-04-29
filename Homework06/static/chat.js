
$(document).ready(()=>
{
    $(".input-message input[type = text]").on("keydown", (e)=> {
        if (e.keyCode == 13){
            //enter
            onEnterMessage();
        }
    });
    addMessage(nick, true, false);
});

function onEnterMessage()
{
    var message = $(".input-message input[type = text]").val();
    $(".input-message input[type = text]").val("");
    addMessage(message);
    clear(message);
    
    
}

function addMessage(message, isSystem =false,isSelf=true)
{
    if(message==null ||message.trim()=="" ) return;
    var chatBox = $(".chat-box");
    
    var newMessage = $(".chat-box .message.template").clone();
    newMessage.removeClass("template"); 
    if(isSystem) newMessage.addClass("system");
    if(isSelf) newMessage.addClass("self");
    chatBox.append(newMessage);

    newMessage.find(".text").text(message);
    newMessage.find(".time").text(moment().format("YYYY/MM/DD HH:mm:ss"));

    var element = chatBox[0];
    element.scrollTop = element.scrollHeight - element.clientHeight;
    
} 

function clear(message)
{
    clearvalue = "/clear"
    if (message==clearvalue)
    {
        console.log('del');
        $('.chat-box div[class$="message"]').remove();
    }
    
}



