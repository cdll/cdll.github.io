<github-repo>
  <style>
    :scope{
      background: lightcyan;
    }
    .text-dark{
      color: darkgray;margin: 0;padding: .5rem;
    }
  </style>

  <section class="text-dark" each='{repo in opts.repos}' key='{repo.created_at}' if='{!repo.fork}'>
    <a class="" riot-href='{repo.html_url}'><big>{repo.name}</big></a>
  </section>

  <script>
    // console.info(opts.repos)
  </script>
</github-repo>