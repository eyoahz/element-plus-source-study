Object.defineProperty(window.console, 'mylog', {
  value: function (data: any) {
    console.log('%c爷爷在此！', 'background: skyblue; border-radius: 4px;')
  }
})
