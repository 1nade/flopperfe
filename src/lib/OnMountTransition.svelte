<script>
    import { scale, fly } from 'svelte/transition';
  </script>
  
<div
in:scale="{{ duration: 750, delay: 300 }}"
out:fly="{{ y: -50, duration: 650 }}" 
>
      <slot/>
</div>