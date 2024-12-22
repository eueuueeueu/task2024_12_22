(function (window) {
  function setSizeConfig(max, unit) {
    let config = {}
    for (let i = 0; i < max; i++) {
      config[i] = `${i}${unit}`
    }
    return config
  }
  window.tailwind.config = {
    // 配置暗黑模式
    darkMode: 'selector',
    // 扩展样式主题
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          primary: '#00ffff',
        },
        fontFamily: {
          dhFy: 'Source Han Sans CN',
          dhFy2: 'Myriad Pro Regular'
        },
        // clipPath:'polygon(0% 0%, 100% 0%, 100% 90%, 0 80%);',
        width: setSizeConfig(2000, 'px'),
        height: setSizeConfig(20000, 'px'),
        fontSize: setSizeConfig(200, 'px'),
        margin: setSizeConfig(500, 'px'),
        padding: setSizeConfig(5000, 'px'),
        lineHeight: setSizeConfig(500, 'px'),
        backgroundImage: {
          'dhBg': `linear-gradient(4deg, white, white 50%, transparent 50%, transparent 100%)`,
          'dhBg1': `linear-gradient(6deg, transparent, transparent 50%, white 50%, white 100%)`,
          'dhBg2': `url("../images/组 1(1).png")`,
          'dhBg3': `url("../images/组 1.png")`
        },
      }
    }
  }
})(window)