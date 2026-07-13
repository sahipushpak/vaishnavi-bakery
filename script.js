@media (max-width: 991px) {

    .menu-btn{
        display:block;
    }

    .navbar{
        position:absolute;
        top:80px;
        left:0;
        width:100%;
        background:#ffffff;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:25px;
        padding:30px 0;
        box-shadow:0 10px 20px rgba(0,0,0,.1);

        transform:translateY(-150%);
        transition:.4s ease;
    }

    .navbar.active{
        transform:translateY(0);
    }

    .hero{
        grid-template-columns:1fr;
        text-align:center;
    }

    .hero-buttons{
        justify-content:center;
    }

    .hero p{
        margin:0 auto 35px;
    }

}
