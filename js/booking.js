async function formSubmitHandler(event) {
    event.preventDefault();
    const checkInDateValue = document.getElementById('checkindate').value;
    const checkOutDateValue = document.getElementById('checkoutdate').value;

    const checkInDate = new Date(checkInDateValue);
    const checkOutDate = new Date(checkOutDateValue);
    
    const checkInISOString = checkInDate.toISOString();
    const checkOutISOString = checkOutDate.toISOString();

    const roomType = document.getElementById('roomtype').value;
    const guests = document.getElementById('guests').value;
    const totalPrice = price * guests;
    const bookingData = {
        checkIn: checkInISOString,
        checkOut: checkOutISOString,
        roomType: roomType,
        guests: guests,
        price: totalPrice,
        postId: hotelId
    };
    
    try {
        const response = await fetch('https://comfortable-tan-marlin.cyclic.app/api/bookings', {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Booking successful.',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Booking failed. Please try again later.',
                confirmButtonText: 'OK'
            });
        }

} catch (error) {
    console.error('Error:', error);
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Booking failed. Please try again later.',
        confirmButtonText: 'OK'
    });
}
}



async function sendMessage() {
    const name = document.getElementById("input-name").value;
    const message = document.getElementById("input-message").value;
  
    try {
      const sendMessage = await fetch(`${API_BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, message })
    })
    const response = await sendMessage.json();
  
    if (response.success) {
      await fetchMessages(); // Refresh the message list after adding a new message
    } else {
      console.error(response.message);
    }
    } catch (error) {
      console.error('Error adding message:', error);
    }
  }