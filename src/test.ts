Object.defineProperty(window.console, 'mylog', {
  value: function (data: any) {
    console.log(
      '%c爷爷在此！',
      `background: skyblue;
       border: 1px dashed;
       border-radius: 4px;
       padding: 2px;`,
      data
    )
  }
})
