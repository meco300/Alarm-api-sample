window.onload = function onload() {
    try{
        // alarm event handler
        navigator.mozSetMessageHandler('alarm',AlarmActivityHandler);

        var setTime = new Date();
        setTime.setSeconds(setTime.getSeconds() + 20);

        var data = {
            foo: "bar"
        }
        var request = navigator.mozAlarms.add(setTime, "ignoreTimezone", data);

        request.onsuccess = function () {
            alert("Set alarm 20 seconds after now");
        };
        request.onerror = function () {
            alert("An error occurred: " + this.error.name);
        };
    }catch(e){
        alert(e);
    }
}

function AlarmActivityHandler(mozAlarm) {
    alert('alarm called');
}