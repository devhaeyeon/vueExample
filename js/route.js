// 데이터
const dataSet= {
    cardViewItems:[{
        id:1,
        title:'사용한 UI Framework',
        suffix:'primary',
        titleIconClass:'check-bold',
        description:`
            사용한 UI Framework으로는 Material Kit입니다. Creative
            Tim이
            구글 Material Design에서 영감을 얻어 만든 부트스트랩 UI 킷이라고 합니다. 해당 테마는 메터리얼 잘 적용한
            테마라고
            합니다. 메터리얼 디자인 원칙을 적용한 부트스트랩 엘리먼츠로 리스타일링 할 때 세 가지 완전히 코딩한 좋은 예제 페이지를 참고할
            수
            있다고 합니다. (뷰 컴포넌트 킷도 제공함.)
        `,
        moveLink:'https://www.creative-tim.com/'
    },
    {
        id:2,
        title:'학습한 강좌',
        suffix:'success',
        titleIconClass:'istanbul',
        description:`누구나 다루기 쉬운 Vue.js 프론트 개발 - 3시간 안에 배우기`,
        moveLink:'https://www.inflearn.com/course/vue-pwa-vue-js-%EA%B8%B0%EB%B3%B8/'
    },
    {
        id:2,
        title:'참고한 문서',
        suffix:'warning',
        titleIconClass:'planet',
        description:`친절히 설명이 잘 되어 있는 공식 사이트를 참고 하였습니다.`,
        moveLink:'https://kr.vuejs.org/v2/guide/instance.html'
    }
],
'listViewItems':[
    {
        id:'1',
        title:'인스턴스',
        titleIconClass:'settings',
        description:`Vue 생성자 함수로 뷰모델을 만드는데 이것을 인스턴스이다.`
    },
    {
        id:'2',
        title:'컴포넌트',
        titleIconClass:'ruler-pencil',
        description:`화면에 비춰지는 뷰의 단위를 쪼개어 재활용이 가능한 형태로 관리하는 것이 컴포넌트`
    },
    {
        id:'3',
        title:'라우터',
        titleIconClass:'settings',
        description:`화면 간의 이동`
    }
]
}

const listViewComponent = {
    props:['listViewItems'],
    template :`
    <div class="col-lg-4">
        <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
            <i class="ni text-primary" :class="'ni-'+listViewItems.titleIconClass"></i>
        </div>
        <h5 class="text-white mt-3">{{listViewItems.title}}</h5>
        <p class="text-white mt-3">{{listViewItems.description}}</p>
    </div>
    `
}

Vue.component('listview-component',listViewComponent);

const cardViewComponent = {
    props:['cardViewItems'],
    template:`
    <div class="col-lg-4">
        <div class="card card-lift--hover shadow border-0">
            <div class="card-body py-5">
                <div class="icon icon-shape rounded-circle mb-4" :class="'icon-shape-'+cardViewItems.suffix">
                    <i class="ni" :class="'ni-'+cardViewItems.titleIconClass"></i>
                </div>
                <h6 class="text-primary text-uppercase">{{cardViewItems.title}}</h6>
                <p class="description mt-3">{{cardViewItems.description}}</p>
                <div>
                    <span class="badge badge-pill" :class="'badge-'+cardViewItems.suffix">design</span>
                    <span class="badge badge-pill" :class="'badge-'+cardViewItems.suffix">ui</span>
                    <span class="badge badge-pill" :class="'badge-'+cardViewItems.suffix">framework</span>
                </div>
                <a :href="cardViewItems.moveLink" class="btn mt-4" :class="'btn-'+cardViewItems.suffix">사이트로
                    이동</a>
            </div>
        </div>
    </div>
    `
}
Vue.component('cardview-component',cardViewComponent);

// 메인 컴포넌트
const Main = {
    props:['cardViewItems','listViewItems'],
    template:`
        <div>    
            <section class="section section-lg pt-lg-0 mt--200">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                        <div class="row row-grid>
                            <cardview-component v-bind:card-view-items="cardviewitem" :key="cardviewitem.id" v-for="cardviewitem in cardViewItems"></cardview-component>
                        </div>                
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-lg bg-gradient-default">
                <div class="container pt-lg pb-300">
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-10">
                            <h2 class="display-3 text-white">적용한 개념</h2>
                            <p class="lead text-white">인프런에서 학습한 내용을 바탕으로 예제를 만들어 보았습니다.</p>
                        </div>
                    </div>
                    <div class="row row-grid>
                        <listview-component :key="listviewitem.id" v-bind:list-view-items="listviewitem" v-for="listviewitem in listViewItems"></listview-component>
                    </div>
                    </div>
                <!-- SVG separator -->
                <div class="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
        </div>
    `
}

// 프로필 컴포넌트
const Profile = {
    template:`
    <div class="profile-page">
        <section class="section">
            <div class="container">
                <div class="card card-profile shadow mt--300">
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <h3>Scarlett.kim
                                <span class="font-weight-light">, 30</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Dk Techin, UI개발1팀</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>FrondEnd Developer</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Enjoy Your Life</p>
                                    <a href="#">메인으로 이동</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `
};

// 라우트 설정
const routes = [
    {
        path:'',
        component:Main
    },
    {
        path:'/profile',
        component:Profile
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    data() {
        return dataSet
    },
    components:{
        'cardview-component':cardViewComponent
    }
}).$mount('#app');