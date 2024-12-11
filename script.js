const data = {
 // labels: ["Coffee", "Meat", "Shower", "Car", "E-mail"],
  datasets: [
    {
      label: "My Emissions in a Day",
      data: [300, 7200, 2000, 3000, 700],
      backgroundColor: ["#FFD5BD", "#FF5C00", "#FF9559", "#FE8039", "#FFAC7E"],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    onHover: (event, chartElement) => {
      const images = document.querySelectorAll(".image-container img");
      const valueTexts = document.querySelectorAll(".value-text");

      // Reset all images and values
      images.forEach((img) => img.classList.remove("highlighted"));
      valueTexts.forEach((text) => (text.textContent = ""));

      if (chartElement && chartElement.length > 0) {
        const index = chartElement[0].index;
        const highlightedImage = images[index];
        const valueText = valueTexts[index];
        highlightedImage.classList.add("highlighted");
        valueText.textContent = `Value: ${data.datasets[0].data[index]} g CO2`;
      }
    },
  },
};

const ctx = document.getElementById("myPieChart").getContext("2d");
new Chart(ctx, config);
