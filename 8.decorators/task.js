//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    let hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
       console.log("Из кэша: " + objectInCache.result);
       return "Из кэша: " + objectInCache.result;
    }
    
    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}
   

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let count = 0;
  let allCount = 0;
  let timeoutId = null;
  function wrapper(...args) {
   if(timeoutId) {
      clearTimeout(timeoutId);
      }
    if(!timeoutId) {
      func(...args);
      wrapper.count++;
    }
    if(!timeoutId || timeoutId) {
      wrapper.allCount++;
    }
    timeoutId = setTimeout(() => {
    func(...args);
    wrapper.count++;
  }, delay);
}
wrapper.count = count;
wrapper.allCount = allCount;
return wrapper;
}
