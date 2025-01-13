/*
Student Name: Anh Le
Student UCSC email: mle288@ucsc.edu

Notes to Grader:
N/A
*/

/*
  Draw a red vector v1 on a black canvas instead of the 
  blue rectangle. The origin of the vector should be the 
  center of the canvas. 
  */
// Define draw vector function
const drawVector = (v, color) => {
  var canvas = document.getElementById("example");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }

  // Get the rendering context for 2DCG <- (2)
  var ctx = canvas.getContext("2d");
  ctx.beginPath(); // Start a new path

  const originX = canvas.width / 2;
  const originY = canvas.height / 2;

  const scaledX = v.elements[0] * 20 + originX;
  const scaledY = originY - v.elements[1] * 20;

  // Move to middle of 400x400 canvas
  ctx.moveTo(originX, originY);
  ctx.lineTo(scaledX, scaledY);
  ctx.strokeStyle = color;

  ctx.stroke();
};

const angleBetween = (v1, v2) => {
  // Calculate the dot product numrator
  let dotProductNumerator = Vector3.dot(v1, v2);

  // Calculate components for denominator
  let magnitudeA = v1.magnitude();
  let magnitudeB = v2.magnitude();
  let denominator = magnitudeA * magnitudeB;

  // CosAlpha
  let cosAlpha = dotProductNumerator / denominator;
  // Normalize
  cosAlpha = Math.max(-1, Math.min(1, cosAlpha)); // Avoiding floating-point error;

  // Angle calculation
  let angleRad = Math.acos(cosAlpha);

  // Change to degree
  let angleDeg = angleRad * (180 / Math.PI);
  return angleDeg;
};

const areaTriangle = (v1, v2) => {
  // Calculate the cross product numrator
  let crossProduct = Vector3.cross(v1, v2);

  let areaFull = crossProduct.magnitude();
  let areaTriangle = areaFull / 2;

  return areaTriangle;
};

// DrawRectangle.js
function main() {
  // Retrieve <canvas> element <- (1)
  var canvas = document.getElementById("example");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }

  // Get the rendering context for 2DCG <- (2)
  var ctx = canvas.getContext("2d");

  // Draw a black rectangle <- (3)
  ctx.fillStyle = "rgba(0, 0, 0, 1.0)"; // Set a blue color
  // x, y, width and height
  ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

  // Add an event listener to the draw button
  document.getElementById("draw-button").addEventListener("click", () => {
    // Get the values from the input fields
    const x1 = parseFloat(document.getElementById("x-coordinate-1").value);
    const y1 = parseFloat(document.getElementById("y-coordinate-1").value);
    const x2 = parseFloat(document.getElementById("x-coordinate-2").value);
    const y2 = parseFloat(document.getElementById("y-coordinate-2").value);

    // Check if the inputs are valid numbers
    if (isNaN(x1) || isNaN(y2) || isNaN(x1) || isNaN(y2)) {
      alert("Please enter valid numbers for the coordinates.");
      return;
    }

    // x, y, width and height
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    /*
    instantiate a vector v1 using the Vector3 class from cuon-matrix.js 
    library (set the z coordinate to zero).
    */
    let v1 = new Vector3([x1, y1, 0]);
    let v2 = new Vector3([x2, y2, 0]);
    drawVector(v1, "red");
    drawVector(v2, "blue");

    document.getElementById("draw-button-2").addEventListener("click", () => {
      const operation = document.getElementById("operation").value;

      switch (operation) {
        case "add":
          // Set background color to black
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          drawVector(v1, "red");
          drawVector(v2, "blue");

          v3 = v1.add(v2);
          drawVector(v3, "green"); // Draw the result (v1 + v2) in green
          break;
        case "sub":
          // Set background color to black
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          drawVector(v1, "red");
          drawVector(v2, "blue");

          v3 = v1.sub(v2);
          drawVector(v3, "green");
          break;
        case "mul":
          // Set background color to black
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          drawVector(v1, "red");
          drawVector(v2, "blue");

          const scaMul = parseFloat(document.getElementById("scalar").value);

          v3 = v1.mul(scaMul);
          v4 = v2.mul(scaMul);
          drawVector(v3, "green");
          drawVector(v4, "green");
          break;
        case "div":
          // Set background color to black
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          drawVector(v1, "red");
          drawVector(v2, "blue");

          const scaDiv = parseFloat(document.getElementById("scalar").value);
          v3 = v1.div(scaDiv);
          v4 = v2.div(scaDiv);
          drawVector(v3, "green");
          drawVector(v4, "green");
          break;
        case "mag":
          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);

          console.log("Magnitude v1: " + v1.magnitude());
          console.log("Magnitude v2: " + v2.magnitude());
          break;
        case "nor":
          // Set background color to black
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          drawVector(v1, "red");
          drawVector(v2, "blue");

          v3 = v1.normalize();
          v4 = v2.normalize();
          drawVector(v3, "green");
          drawVector(v4, "green");
          break;
        case "angle-between":
          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          console.log("Angle: " + angleBetween(v1, v2));
          break;
        case "area":
          v1 = new Vector3([x1, y1, 0]);
          v2 = new Vector3([x2, y2, 0]);
          console.log("Angle of the triangle: " + areaTriangle(v1, v2));
          break;
      }
    });
  });
}
