import colour

# xyY = [0.615, 0.346, 5.6]    #red #fe360b
# xyY = [0.146, 0.072, 2.1 ] #blue #0031fe
# xyY = [0.292, 0.614, 16.4] #green #00fe00
# xyY = [ 0.412, 0.515, 21.9] #yellow #f2fe00
# xyY = [0.313, 0.226, 11.7] #pink #f995fe
# xyY = [0.538, 0.411, 8.5]  #brown #fe8400
xyY = [0.220, 0.331, 18.5] #cyan #00fefd

#print(colour.convert(xyY, 'CIE xyY', 'Hexadecimal'))

XYZ = colour.xyY_to_XYZ(xyY)
RGB = colour.XYZ_to_sRGB(XYZ, apply_cctf_encoding=False)
print(RGB)
RGB_n = colour.utilities.normalise_maximum(RGB)
print(RGB_n)
print(colour.notation.RGB_to_HEX(colour.cctf_encoding(RGB_n)))
