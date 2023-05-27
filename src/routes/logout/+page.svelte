<script lang="ts">
    localStorage.removeItem('username');
    localStorage.removeItem('flopperToken');
    localStorage.removeItem('createdAt');
    
    window.open("/login","_self")
</script>