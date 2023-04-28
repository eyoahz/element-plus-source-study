Object.defineProperty(window.console, 'mylog', {
  value: function (data: any) {
    console.log(
      '%c爷爷在此！',
      `background: skyblue;
       border: 1px solid;
       border-radius: 4px;
       padding: 5px;`,
      data
    )
  }
})
