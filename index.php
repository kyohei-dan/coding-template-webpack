<?php include(__DIR__ . '/init.php'); ?>
<!DOCTYPE html>
<html lang="ja">
<?php view(
  "head",
  [
    'title' => 'トップページ | 会社名',
    'description' => 'ディスクリプション'
  ]
); ?>

<body>
  <div id="top" class="p-top wrap-all">

    <!--=============== ▼HEADER ===============-->
    <?php view("header"); ?>
    <img src="" alt="">

    <!--=============== ▼MAIN ===============-->
    <main class="p-main">
      <section class="p-news">
        <div class="p-news__inner">
          <article class="p-news__article">
            <h1 class="p-news__heading test">testtesttesttest</h1>
            <ul class="p-news__list">
              <li class="p-news__list-item">
                <span class="p-news__icon"><i class="bx bx-loader bx-spin  bx-md"></i></span>
                <span class="p-news__label">通常ラベル</span>
              </li>
              <li class="p-news__list-item">
                <span class="p-news__icon"><i class="bx bxs-bell bx-tada bx-md"></i></span>
                <span class="p-news__label--red">赤ラベル</span>
              </li>
            </ul>
            <figure>
              <img src="https://picsum.photos/seed/picsum/500/350" alt="の画像" class="p-news__thumbnail" width="" height="" loading="lazy" decoding="async" oncontextmenu="return false;" onselectstart="return false;" onmousedown="return false;">
            </figure>
            <p class="p-news__text">ニュース記事</p>
            <a href="https://boxicons.com/usage" class="p-news__link" target="_blank" rel="noopener noreferrer">詳しくはこちら</a>
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
