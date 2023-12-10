
### Train and test Dataset

train_df lenght:  179649   test_df length:  9981   valid_df length:  9981
The number of classes in the dataset is:  56
            CLASS               IMAGE COUNT 
       Apple Apple scab            5443     
       Apple Black rot             5368     
    Apple Cedar apple rust         2376     
        Apple healthy              3553     
Bacterial leaf blight in rice leaf      108     
     Blight in corn Leaf           3094     
      Blueberry healthy            3245     
   Brown spot in rice leaf          108     
     Cercospora leaf spot           170     
Cherry (including sour) Powdery mildew     2273     
Cherry (including_sour) healthy     1847     
   Common Rust in corn Leaf        3526     
     Corn (maize) healthy          2511     
            Garlic                  132     
       Grape Black rot             10195    
   Grape Esca Black Measles        11956    
Grape Leaf blight Isariopsis Leaf Spot     9299     
        Grape healthy               915     
 Gray Leaf Spot in corn Leaf       1550     
    Leaf smut in rice leaf          108     
Orange Haunglongbing Citrus greening     47585    
        Peach healthy               778     
  Pepper bell Bacterial spot       2689     
     Pepper bell healthy           3194     
     Potato Early blight           2700     
      Potato Late blight           2700     
        Potato healthy              329     
      Raspberry healthy             802     
        Sogatella rice              70      
       Soybean healthy             10994    
    Strawberry Leaf scorch         2398     
      Strawberry healthy            985     
    Tomato Bacterial spot          5743     
     Tomato Early blight           2700     
      Tomato Late blight           5154     
       Tomato Leaf Mold            2570     
  Tomato Septoria leaf spot        4782     
Tomato Spider mites Two spotted spider mite     4525     
      Tomato Target Spot           3791     
  Tomato Tomato mosaic virus       1007     
        Tomato healthy             3437     
      algal leaf in tea             305     
      anthracnose in tea            270     
     bird eye spot in tea           270     
     brown blight in tea            305     
        cabbage looper              211     
          corn crop                 281     
            ginger                  122     
       healthy tea leaf             200     
         lemon canker               165     
            onion                   54      
potassium deficiency in plant       49      
         potato crop                108     
     potato hollow heart            162     
     red leaf spot in tea           386     
        tomato canker               51      
Orange Haunglongbing Citrus greening  has the most images=  47585   potassium deficiency in plant  has the least images=  49
average height=  263  average width=  261 aspect ratio=  1.0098039215686274

Found 180842 validated image filenames belonging to 56 classes.
Found 9981 validated image filenames belonging to 56 classes.
Found 9981 validated image filenames belonging to 56 classes.
test batch size:  9   test steps:  1109  number of classes :  56
Total Train Image:- 180842
Total Validation Image:- 9981
Total Test Image:- 9981

### Classification Report:

1109/1109 [==============================] - 60s 51ms/step
there were 19 errors in 9981 tests for an accuracy of  99.81
Classification Report:
----------------------
                                              precision    recall  f1-score   support

                           Apple Apple scab     1.0000    1.0000    1.0000       303
                            Apple Black rot     1.0000    1.0000    1.0000       298
                     Apple Cedar apple rust     1.0000    1.0000    1.0000       132
                              Apple healthy     0.9950    1.0000    0.9975       198
         Bacterial leaf blight in rice leaf     1.0000    1.0000    1.0000         6
                        Blight in corn Leaf     0.9713    0.9826    0.9769       172
                          Blueberry healthy     1.0000    0.9945    0.9972       181
                    Brown spot in rice leaf     1.0000    1.0000    1.0000         6
                       Cercospora leaf spot     1.0000    1.0000    1.0000         9
     Cherry (including sour) Powdery mildew     1.0000    1.0000    1.0000       126
            Cherry (including_sour) healthy     1.0000    0.9804    0.9901       102
                   Common Rust in corn Leaf     0.9949    0.9949    0.9949       196
                       Corn (maize) healthy     1.0000    0.9929    0.9964       140
                                     Garlic     1.0000    1.0000    1.0000         7
                            Grape Black rot     1.0000    1.0000    1.0000       566
                   Grape Esca Black Measles     1.0000    1.0000    1.0000       664
     Grape Leaf blight Isariopsis Leaf Spot     1.0000    1.0000    1.0000       517
                              Grape healthy     1.0000    1.0000    1.0000        51
                Gray Leaf Spot in corn Leaf     0.9647    0.9535    0.9591        86
                     Leaf smut in rice leaf     1.0000    1.0000    1.0000         6
       Orange Haunglongbing Citrus greening     1.0000    1.0000    1.0000      2643
                              Peach healthy     1.0000    1.0000    1.0000        43
                 Pepper bell Bacterial spot     1.0000    1.0000    1.0000       150
                        Pepper bell healthy     1.0000    1.0000    1.0000       178
                        Potato Early blight     1.0000    1.0000    1.0000       150
                         Potato Late blight     1.0000    1.0000    1.0000       150
                             Potato healthy     1.0000    1.0000    1.0000        19
                          Raspberry healthy     1.0000    1.0000    1.0000        45
                             Sogatella rice     1.0000    1.0000    1.0000         4
                            Soybean healthy     0.9967    0.9984    0.9975       611
                     Strawberry Leaf scorch     1.0000    1.0000    1.0000       133
                         Strawberry healthy     1.0000    1.0000    1.0000        55
                      Tomato Bacterial spot     1.0000    1.0000    1.0000       319
                        Tomato Early blight     1.0000    1.0000    1.0000       150
                         Tomato Late blight     1.0000    1.0000    1.0000       287
                           Tomato Leaf Mold     1.0000    1.0000    1.0000       143
                  Tomato Septoria leaf spot     1.0000    1.0000    1.0000       265
Tomato Spider mites Two spotted spider mite     1.0000    0.9960    0.9980       251
                         Tomato Target Spot     1.0000    0.9952    0.9976       210
                 Tomato Tomato mosaic virus     1.0000    1.0000    1.0000        56
                             Tomato healthy     0.9896    1.0000    0.9948       191
                          algal leaf in tea     1.0000    1.0000    1.0000        17
                         anthracnose in tea     1.0000    1.0000    1.0000        15
                       bird eye spot in tea     1.0000    1.0000    1.0000        15
                        brown blight in tea     1.0000    1.0000    1.0000        17
                             cabbage looper     0.9091    0.9091    0.9091        11
                                  corn crop     0.8824    0.9375    0.9091        16
                                     ginger     1.0000    1.0000    1.0000         6
                           healthy tea leaf     1.0000    1.0000    1.0000        11
                               lemon canker     1.0000    1.0000    1.0000         9
                                      onion     0.6667    0.6667    0.6667         3
              potassium deficiency in plant     1.0000    0.6667    0.8000         3
                                potato crop     1.0000    1.0000    1.0000         6
                        potato hollow heart     1.0000    1.0000    1.0000         9
                       red leaf spot in tea     1.0000    1.0000    1.0000        21
                              tomato canker     0.7500    1.0000    0.8571         3

                                   accuracy                         0.9981      9981
                                  macro avg     0.9843    0.9834    0.9829      9981
                               weighted avg     0.9981    0.9981    0.9981      9981



### Model Summary


1109/1109 [==============================] - 53s 47ms/step - loss: 0.0797 - accuracy: 0.9981
500/500 [==============================] - 45s 90ms/step - loss: 0.0775 - accuracy: 0.9985
Accuracy on test Dataset:-  99.80964064598083 %
Accuracy on validation Dataset:-  99.84971284866333 %

Model: "plant disease_99.80.h5"
__________________________________________________________________________________________________
 
==================================================================================================
Total params: 11,197,543
Trainable params: 11,107,168
Non-trainable params: 90,375
__________________________________________________________________________________________________

### OPTIMIZE_FOR_SIZE_model.tflite

import tensorflow as tf
model = tf.keras.models.load_model(Model_path)
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.OPTIMIZE_FOR_SIZE]
converter.target_spec.supported_types = [tf.float16]
OPTIMIZE_FOR_SIZE_model = converter.convert()
print("OPTIMIZE_FOR_SIZE Quantization [tf.float16]:- ",len(OPTIMIZE_FOR_SIZE_model))

### tf_lite_Optimize_DEFAULT_model.tflite

import tensorflow as tf
model = tf.keras.models.load_model(Model_path)
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.target_spec.supported_types = [tf.float16]
tf_lite_Optimize_DEFAULT_model = converter.convert()
print("Optimize.DEFAULT Quantization:- ",len(tf_lite_Optimize_DEFAULT_model))

### OPTIMIZE_FOR_LATENCY_model.tflite

import tensorflow as tf
model = tf.keras.models.load_model(Model_path)
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.OPTIMIZE_FOR_LATENCY]
converter.target_spec.supported_types = [tf.float16]
OPTIMIZE_FOR_LATENCY_model = converter.convert()
print("OPTIMIZE_FOR_LATENCY Quantization:- ",len(OPTIMIZE_FOR_LATENCY_model))