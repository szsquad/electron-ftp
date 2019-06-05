// 如果在js中引入本地静态资源图片时使用import img from './img/bd_logo1.png'这种写法是没有问题的，但是在typscript中是无法识别非代码资源的，所以会报错TS2307: cannot find module '.png'。因此，我们需要主动的去声明这个module
declare module '*.png'
