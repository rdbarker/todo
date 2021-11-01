const subscriptionService = (() => {
    const subs = {};
    const subscribe = (topic,callBack) =>{
        if (!subs.hasOwnProperty(topic)){
            subs[topic]=[];
        }
        subs[topic].push(callBack);
    }
    const publish = (topic,data) => {
        subs[topic].forEach(subCallBack => subCallBack(data));
    }
    const unsubscribe = (topic,callBack) =>{
        const index = subs[topic].indexOf(callBack);
        if (index > -1){
            subs[topic].splice(index, 1);
        }
        if (subs[topic].length===0){
            delete subs[topic];
        }
    }
    return {subscribe,publish,unsubscribe}
})();

export default subscriptionService;