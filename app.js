$(function ()
{
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nohp = /^(0\d{9,11})$/;
    const username = /^[a-zA-Z0-9_]{5,}$/;
    const IdEMP = /^EMP\d{4}$/;
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    $('input').each(function ()
    {
        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == "email")
            {
                if (email.test($(this).val()))
                {
                    pElement.html('Email Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('Email Tidak Valid')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            if ($(this).attr('id') == "nohp")
            {
                if (nohp.test($(this).val()))
                {
                    pElement.html('Nomor Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('Nomor Tidak Valid')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            if ($(this).attr('id') == "username")
            {
                if (username.test($(this).val()))
                {
                    pElement.html('username Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('username tidak Valid')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            if ($(this).attr('id') == "IdEMP")
            {
                if (IdEMP.test($(this).val()))
                {
                    pElement.html('ID Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('ID Tidak Valid')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            if ($(this).attr('id') == "password")
            {
                if (password.test($(this).val()))
                {
                    pElement.html('password Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('password Tidak Valid')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
        })
    })
})