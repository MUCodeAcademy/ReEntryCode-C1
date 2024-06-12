import { useState } from 'react';

function ArrayPractice() {
    // Make a state to hold the images
    // The url of the images will look like: images/Attributes.png
    const [images, setImages] = useState([
        { name: "spider", url: "images/spiderLuce.png" },
        { name: "cave", url: "images/Cave.png" },
        { name: "rhino", url: "images/Rhino.jpg" }
    ]);

    function bubbleSort(array) {
        let isSwapped;
        for (let i = 0; i < array.length; i++) {
            isSwapped = false;
            for (let j = 0; j < (array.length - i - 1); j++) {
                if (array[j].name > array[j + 1].name) {
                    isSwapped = true;
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }

            if (!isSwapped) {
                break;
            }
        }
        return array;
    }

    function sortImages() {
        let sorted = [...images];
        bubbleSort(sorted);
        setImages(sorted);
    }

    // function that deletes the image that they click on
    // use filter to keep the elements that they didn't click on
    // this will check if the current item in the loop is the item or index that's being given to the function
    function deleteImage(image) {
        // Loop through the images, and only keep the items if they aren't the one the user clicked on
        const filteredImages = images.filter((item) => {
            return item !== image;
        });
        setImages(filteredImages);
    }

    function addImage(image) {
        // updates the images array with the new image to add
        setImages([...images, image]);
    }

    return (
        <div>
            {/* images.map */}
            {images.map((item, index) => (
                <>
                    <img src={item.url} />
                    <button onClick={() => deleteImage(item)}>Delete</button>
                </>
            ))}
            <button onClick={() => addImage("images/Map.jpg")}>Add Image</button>
            <input type='file' onChange={(e) => addImage("images/" + e.target.files[0].name)} />
            <button onClick={() => sortImages()}>Sort images</button>
        </div>
    )
}

export default ArrayPractice;