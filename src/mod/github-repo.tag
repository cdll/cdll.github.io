<github-repo>
  <style>
    :scope{
      background: lightcyan;
    }
    .text-dark{
      color: darkgray;
      margin: 0;
      padding: .5rem;
    }
  </style>
  <p class="text-dark" each="{v, k in opts.repos}"><big>{k}: </big>{v}</p>

  <script>
    console.info(opts.repos)
    this.repos= opts.repos
  </script>
</github-repo>