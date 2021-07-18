<template>
  <div class="calc">
    <div class="head">
      <div class="last">{{eskiSayi}}<span>{{dortIslem}}</span></div>
      <div class="new">{{yeniSayi}}</div>
    </div>
    <div class="buttonsContent">
      <div class="left">
        <button>C</button>
        <button>9</button>
        <button>8</button>
        <button>7</button>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>0</button>
        <button>=</button>
      </div>
      <div class="right">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      eskiSayi: '0',
      islem: false,
      yeniSayi: '0',
      deger: '',
      dortIslem: '',
      islemGuncelle: false
    }
  },
  methods: {
    buttonsClick(buttonText)
    {
      if(buttonText.toElement.nodeName == 'BUTTON')
      {
        let deger = buttonText.target.innerText;
        if(deger == 'C')
        {
          this.yeniSayi='0'
          this.eskiSayi='0'
          this.dortIslem = ''
          return false
        }
        else
          this.deger = deger

        if(deger=='*' || deger == '-' || deger == '/' || deger == '+')
          this.dortIslemYap()
        else if(deger == '=')
        {
          this.islemYap()
          this.eskiSayi = ''
          this.dortIslem = ''
        }
        else
          this.sayiIsle();
      }
    },
    dortIslemYap(){
      if(this.eskiSayi == 0)
      {
        this.eskiSayi = this.yeniSayi
        this.yeniSayi='0'
        this.dortIslem = this.deger
      }
      else if(this.eskiSayi != 0)
      {
        this.dortIslem = this.deger
        this.islemYap()
        this.eskiSayi = ''
        if(this.islemGuncelle) this.dortIslem = '';
      }
      else
      {
        console.log("bura")
        if(this.yeniSayi != '')
        {
          this.islemYap()
          this.eskiSayi = ''
          if(this.islemGuncelle) this.dortIslem = '';
        }
      }
    },
    islemYap(){
      switch (this.dortIslem){
        case('+'):
          this.yeniSayi = parseInt(this.eskiSayi) + parseInt(this.yeniSayi)
        break;
        case('-'):
          this.yeniSayi = parseInt(this.eskiSayi) - parseInt(this.yeniSayi)
        break;
        case('/'):
          this.yeniSayi = parseInt(this.eskiSayi) / parseInt(this.yeniSayi)
        break;
        case('*'):
          this.yeniSayi = parseInt(this.eskiSayi) * parseInt(this.yeniSayi)
        break;
      }
      this.dortIslem = ''
    },
    sayiIsle(){
      if(this.eskiSayi == '')
      {
        this.eskiSayi=this.yeniSayi
        this.yeniSayi = this.deger
      }
      else{
        if(this.yeniSayi == '0') this.yeniSayi='';
        this.yeniSayi = this.yeniSayi + this.deger;
      }
        
      
    }
  },
  mounted() {
    document.addEventListener('click', this.buttonsClick);
  }
}
</script>

<style lang="postcss">
.calc{width: calc(20rem); @apply mx-auto rounded-md bg-calcBg text-white mt-32 }
.head{ @apply text-right text-5xl px-4 pt-4 }
.head .last{ @apply mb-3 h-12}
.head .new{ @apply mb-4 }

.buttonsContent{ width: calc(20rem); @apply bg-calcBottomBg flex }
.buttonsContent .left{ width:calc(15rem + 6px);}
.buttonsContent .right{width:calc(5rem + 2px); }
.buttonsContent .left button, .buttonsContent .right button{ @apply w-20 h-20 text-4xl border border-white border-opacity-25 hover:bg-calcButtonHoverBg}
.buttonsContent .right button{@apply bg-calcRightButtonBg hover:bg-calcRightButtonHoverBg}
</style>
