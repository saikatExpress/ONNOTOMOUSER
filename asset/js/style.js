$(document).ready(function(){
      // Toggle left sidebar
      $('.menu-toggle').click(function(){
        $('.sidebar').addClass('active');
      });

      $('.close-sidebar').click(function(){
        $('.sidebar').removeClass('active');
      });

      // Toggle right sidebar
      $('.right-sidebar-toggle').click(function(){
        $('.right-sidebar').addClass('active');
      });

      $('.close-right-sidebar').click(function(){
        $('.right-sidebar').removeClass('active');
      });

      // Header Dropdown functionality
      $('.header-dropdown .dropbtn').click(function(e){
        e.stopPropagation();
        var parent = $(this).parent('.header-dropdown');

        // Close other header dropdowns
        $('.header-dropdown').not(parent).removeClass('active').find('.header-dropdown-content').slideUp(200);

        // Toggle current dropdown
        parent.toggleClass('active');
        parent.find('.header-dropdown-content').slideToggle(200);
      });

      // Sidebar Dropdown functionality
      $('.sidebar-dropdown > a').click(function(e){
        e.preventDefault();
        var parent = $(this).parent('.sidebar-dropdown');

        // Close other sidebar dropdowns
        $('.sidebar-dropdown').not(parent).removeClass('active').find('.sidebar-dropdown-content').slideUp(200);

        // Toggle current dropdown
        parent.toggleClass('active');
        parent.find('.sidebar-dropdown-content').slideToggle(200);
      });

      // Close all dropdowns when clicking outside
      $(document).click(function(){
        $('.header-dropdown').removeClass('active').find('.header-dropdown-content').slideUp(200);
        $('.sidebar-dropdown').removeClass('active').find('.sidebar-dropdown-content').slideUp(200);
      });

      // Prevent closing dropdown when clicking inside
      $('.header-dropdown-content, .sidebar-dropdown-content').click(function(e){
        e.stopPropagation();
      });
    });