<template>
    <section>
        <div class="navBox">
            <div>
                <p><i class="fa fa-bars"></i></p>
                <p>分类</p>
            </div>
            <div>
                <p><i class="fa fa-vimeo"></i></p>
                <p>优购码</p>
            </div>
            <div>
                <p><i class="fa fa-refresh"></i></p>
                <p>以旧换新</p>
            </div>
            <div>
                <p><i class="fa fa-registered" aria-hidden="true"></i></p>
                <p>实名认证</p>
            </div>
            <div>
                <p><i class="fa fa-tasks"></i></p>
                <p>APP下载</p>
            </div>
        </div>
        <ul class="forDet">
            <li>
                <span></span>
                <h2>没找到合适的接口</h2>
            </li>
            <li>
                <span></span>
                <h2>没找到合适的接口</h2>
            </li>
        </ul>
    </section>
</template>



<script>

export default {
  name: "AppNav"
}
</script>

<style lang='scss' scoped>
    .navBox{
        height:75px;
        background:#fff;
        display:flex;
        >div{
            width:20%;
            height:100%;
            display: flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            >p:first-child{
                width:41.66px;
                height:41.66px;
                font-size:35px;
                color:red;
                line-height:41.66px;
                text-align:center;
            }
            >p:last-child{
                width:66.69px;
                height:17.45px;
                text-align:center;
                line-height:17.45px;
                font-size:14px;
                color:#333;
            }
        }
    }
    .forDet{
        height: 100px;
        border-top:6px solid lightgray;
        background:lightgray;
        display:flex;
        justify-content:space-around;
        >li{
            width:175px;
            height:94px;
            background:pink;

            
        }
    }


</style>


