<?php include ( dirname(__FILE__) . '/init.php' ); ?>
<!DOCTYPE html>
<html lang="ja">
<?php view("head",
['title' => 'トップページ | 会社名',
'description' => 'ディスクリプション'
]); ?>

<body>
  <div id="top" class="p-top wrap-all">

    <!--=============== ▼HEADER ===============-->
    <?php view("header"); ?>

    <!--=============== ▼MAIN ===============-->
    <main class="p-main">
      <section class="p-news">
        <div class="p-news--inner">
          <article class="p-news--article">
            <h1 class="p-news--heading test">testtesttesttest</h1>
            <ul class="p-news--list">
              <li class="p-news--list-item">
                <span class="p-news--icon"><i class="bx bx-loader bx-spin  bx-md"></i></span>
                <span class="p-news--label">通常ラベル</span>
              </li>
              <li class="p-news--list-item">
                <span class="p-news--icon"><i class="bx bxs-bell bx-tada bx-md"></i></span>
                <span class="p-news--label__red">赤ラベル</span>
              </li>
            </ul>
            <figure>
              <img src="https://picsum.photos/seed/picsum/500/350" alt="の画像" class="p-news__thumbnail" width="" height="" loading="lazy" decoding="async" oncontextmenu="return false;" onselectstart="return false;" onmousedown="return false;">
            </figure>
            <p class="p-news--text">ニュース記事</p>
            <a href="https://boxicons.com/usage" class="p-news--link" target="_blank" rel="noopener noreferrer">詳しくはこちら</a>
          </article><!-- /.p-news--article -->
        </div><!-- /.p-news--inner -->
      </section><!-- /.p-news -->
    </main><!-- /.main -->

    <!--=============== ▼FOOTER ===============-->
    <?php view("footer"); ?>
  </div>

  <!--=============== ▼JS ===============-->
  <script src="/dist/js/app.js" defer></script>
  <?php view("polyfill"); ?>
</body>
</html>
