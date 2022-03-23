const forkOnGithub = (config) => {
  const defaultConfig = {
    repo: "https://github.com/semikolan-co/semikolan-react",
    backgroundColor: "#999",
    textColor: "#fff",
    text: "Fork me on GitHub",
    fontSize: "16px"
  };

  const g = (prop) => {
    return config[prop] || defaultConfig[prop];
  };

  const html = `
<style>
#forkongithub a{
    background: ${g("backgroundColor")};
    color: ${g("textColor")};
    text-decoration: none;
    font-family:arial,sans-serif;
    text-align:center;
    font-weight:bold;
    padding:5px 40px;
    font-size:${g("fontSize")};
    line-height:2rem;
    position:relative;
    transition:0.5s;
}
#forkongithub a:hover{
    background:#222;
    color:#fff;
}
#forkongithub a::before,#forkongithub a::after{
    content:"";
    width:100%;
    display:block;
    position:absolute;
    top:1px;
    left:0;
    height:1px;
    background:#fff;
}
#forkongithub a::after{
    bottom:1px;
    top:auto;
}

@media screen and (min-width:800px){
    #forkongithub{
        position:fixed;
        display:block;
        top:0;
        left:0;
        width:200px;
        overflow:hidden;
        height:200px;
        z-index:9999;
    }
    #forkongithub a{
        width:200px;
        position:absolute;
        top:60px;
        left:-60px;
        transform:rotate(-45deg);
        -webkit-transform:rotate(-45deg);
        -ms-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        -o-transform:rotate(-45deg);
        box-shadow:4px 4px 10px rgba(0,0,0,0.8);
    }
}
</style>

<span id="forkongithub">
    <a href="${g("repo")}">
        ${g("text")}
    </a>
</span>`;

  document.body.insertAdjacentHTML("beforeend", html);
};
