import React from "react";
import css from "./LunboTop.css";
import qianjin from "./../../assets/Show/top/qianjin.png";
import houtui from "./../../assets/Show/top/houtui.png";
import img1 from "./../../assets/Show/top/1-1Z4261Z5430-L.jpg";
import img2 from "./../../assets/Show/top/1-1Z320143P40-L.jpg";
import img3 from "./../../assets/Show/top/1-1Z3201005040-L.jpg";
import img4 from "./../../assets/Show/top/1-1Z402111052292.jpg";

class LunboTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iNow: 0, bCheck: true };
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
    this.buts = this.buts.bind(this);
    this.zuo = this.zuo.bind(this);
    this.you = this.you.bind(this);
    this.time = 0;
    this.index = 0;
  }

  handleMouseover() {
    this.state.bCheck = false;
  }

  handleMouseout() {
    this.state.bCheck = true;
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.pan(), 10000);
  // }

  pan() {
    if (this.state.bCheck) {
      this.lunbotuY();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  zuo() {
    //左点击
    this.lunbotuZ();
  }

  you() {
    //右点击
    this.lunbotuY();
  }

  buts(e) {
    //中点击

    var div = document.getElementById("div");
    var but = div.getElementsByTagName("div");
    var len = but.length;

    for (let i = 0; i < len; i++) {
      but[i].onclick = () => {
        this.index = i;
      };
    }
    this.lunboZhong(this.index);
  }

  lunbotuY() {
    //自动轮播 右
    if (new Date() - this.time > 2000) {
      var div = document.getElementById("div");
      var but = div.getElementsByTagName("div");
      var ul = document.getElementById("imgs");
      var li = ul.getElementsByTagName("li");
      var len = li.length;
      var index = this.state.iNow;
      var index2 = this.state.iNow;
      var liw = li[0].offsetWidth;
      var juli = 0;
      var juli2 = liw;

      //旧图离场
      var timer = setInterval(function() {
        if (juli >= -liw) {
          li[index2].style.right = juli + "px";
          juli -= 12.36;
        } else {
          clearInterval(timer);
        }
      }, 20);

      //计算下标
      index = ++index > len - 1 ? 0 : index;

      //新图立即拉到右边
      li[index].style.right = liw + "px";

      //新图进场
      var timer2 = setInterval(function() {
        if (juli2 >= 0) {
          li[index].style.right = juli2 + "px";
          juli2 -= 12.36;
        } else {
          clearInterval(timer2);
        }
      }, 20);

      for (var i = 0; i < len; i++) {
        but[i].style.background = "transparent";
      }
      but[index].style.background = "#FFF";

      //新下标变旧下标
      this.state.iNow = index;

      this.time = new Date();
    }
  }

  lunbotuZ() {
    //自动轮播 左
    if (new Date() - this.time > 0) {
      var div = document.getElementById("div");
      var but = div.getElementsByTagName("div");
      var ul = document.getElementById("imgs");
      var li = ul.getElementsByTagName("li");
      var len = li.length;
      var index = this.state.iNow;
      var index2 = this.state.iNow;
      var liw = li[0].offsetWidth;
      var juli = 0;
      var juli2 = liw;

      var timer = setInterval(function() {
        if (juli <= liw) {
          li[index2].style.right = juli + "px";
          juli += 12.36;
        } else {
          clearInterval(timer);
        }
      }, 20);

      index = --index < 0 ? len - 1 : index;

      li[index].style.right = -liw + "px";

      var timer2 = setInterval(function() {
        if (-juli2 <= 0) {
          li[index].style.right = -juli2 + "px";
          juli2 -= 12.36;
        } else {
          clearInterval(timer2);
        }
      }, 20);

      for (var i = 0; i < len; i++) {
        but[i].style.background = "transparent";
      }
      but[index].style.background = "#FFF";
      this.state.iNow = index;
      this.time = new Date();
    }
  }

  //点击图标
  lunboZhong(index) {
    if (new Date() - this.time > 2000) {
      var div = document.getElementById("div");
      var but = div.getElementsByTagName("div");
      var ul = document.getElementById("imgs");
      var li = ul.getElementsByTagName("li");
      var len = li.length;
      var liw = li[0].offsetWidth;
      var juli = 0;
      var juli2 = liw;
      var index2 = this.state.iNow;


      if (index < index2) {
        var timer = setInterval(function() {
          if (juli >= -liw) {
            li[index2].style.right = juli + "px";
            juli -= 12.36;
          } else {
            clearInterval(timer);
          }
        }, 20);

        li[index].style.right = liw + "px";

        var timer2 = setInterval(function() {
          if (juli2 > 0) {
            li[index].style.right = juli2 + "px";
            juli2 -= 12.36;
          } else {
            clearInterval(timer2);
          }
        }, 20);
      } 
      else if (index == index2) {

      } else {
        var timer = setInterval(function() {
          if (juli <= liw) {
            li[index2].style.right = juli + "px";
            juli += 12.36;
          } else {
            clearInterval(timer);
          }
        }, 20);

        li[index].style.right = -liw + "px";

        var timer2 = setInterval(function() {
          if (-juli2 <= 0) {
            li[index].style.right = -juli2 + "px";
            juli2 -= 12.36;
          } else {
            clearInterval(timer2);
          }
        }, 20);
      }
      for (var i = 0; i < len; i++) {
        but[i].style.background = "transparent";
      }
      but[index].style.background = "#FFF";
      this.state.iNow = index;
      this.time = new Date();
    }
  }

  render() {
    return (
      <div className={css.zhijian}>
        <div
          id={this.props.idNames}
          onMouseOver={this.handleMouseover}
          onMouseOut={this.handleMouseout}
          className={css.center}
        >
          <LunboImg />
          <div id="div" className={css.div}  onClick={this.buts} >
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
          <span onClick={this.zuo} className={css.zuo}>
            <img src={houtui} />
          </span>
          <span onClick={this.you} className={css.you}>
            <img src={qianjin} />
          </span>
        </div>
      </div>
    );
  }
}

function LunboImg() {
  return (
    <ul id="imgs" className={css.ul}>
      <li className={css.lis}>
        <img src={img1} />
      </li>
      <li>
        <img src={img2} />
      </li>
      <li>
        <img src={img3} />
      </li>
      <li>
        <img src={img4} />
      </li>
    </ul>
  );
}

export default LunboTop;
